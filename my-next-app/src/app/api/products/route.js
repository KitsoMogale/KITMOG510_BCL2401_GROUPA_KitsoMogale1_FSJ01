import { getFirestore, collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import app from "../../firebaseConfig";
import { NextResponse } from "next/server";
import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

const db = admin.firestore();
let products = [];

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get('category'); // Get the 'category' query param
  const search = searchParams.get('search');
  const sort = searchParams.get('order');
  const lastVisible = searchParams.get('lastVisible');

  try {
    const productsRef = db.collection('products');
    let q = productsRef;

    if (lastVisible) {
      const lastVisibleDocRef = await db.doc(`products/${lastVisible}`).get();
      if (lastVisibleDocRef.exists) {
        q = q.startAfter(lastVisibleDocRef);
      }
    }
    // Apply search (e.g., by title or name)
    if (search && search.trim()) {
      q = q.where('title', '>=', search).where('title', '<=', search + '\uf8ff');
    }

    // Apply filter (e.g., by category)
    if (category && category.trim()) {
      q = q.where('category', '==', category);
    }

    // Apply sorting (e.g., by price or another field)
    if (sort && sort.trim()) {
      q = q.orderBy('price', sort); // 'asc' or 'desc'
    }

    // Make sure to include 'orderBy' for pagination (Firestore requires orderBy if using startAfter)
    //q = q.orderBy('title'); // Adjust based on your ordering logic

    // Apply limit
    q = q.limit(20);

    // Execute the query
    const querySnapshot = await q.get();

    // Map the results to an array of products
    products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Get the last visible document for pagination
    const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

    return NextResponse.json({ products, lastVisible: lastVisibleDoc?.id || null });
  } catch (e) {
    console.error('Failed to load products', e);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}








