import { getFirestore, collection, query, where, orderBy, startAfter, limit, getDocs, doc } from 'firebase/firestore';
import app from "../../firebaseConfig"; // Import your Firebase config
import { NextResponse } from "next/server";

// Initialize Firestore (client-side)
const db = getFirestore(app);

export async function GET(req, res) {
  console.log('slide1234');
  const { searchParams } = new URL(req.url);

  const category = searchParams.get('category'); // Get the 'category' query param
  const search = searchParams.get('search');
  const sort = searchParams.get('order');
  const lastVisible = searchParams.get('lastVisible');
  console.log(lastVisible, 'lastVisible');

  try {
    const productsRef = collection(db, 'products');
    let q = query(productsRef);

    // Apply last visible document for pagination
    if (lastVisible) {
      const lastVisibleDocRef = doc(db, 'products', lastVisible);
      const lastVisibleSnapshot = await getDocs(lastVisibleDocRef);
      if (!lastVisibleSnapshot.empty) {
        q = query(q, startAfter(lastVisibleSnapshot));
      }
    }

    // Apply search (e.g., by title or name)
    if (search && search.trim()) {
      q = query(q, where('title', '>=', search), where('title', '<=', search + '\uf8ff'));
    }

    // Apply filter (e.g., by category)
    if (category && category.trim()) {
      q = query(q, where('category', '==', category));
    }

    // Apply sorting (e.g., by price or another field)
    if (sort && sort.trim()) {
      q = query(q, orderBy('price', sort)); // 'asc' or 'desc'
    }

    // Apply limit
    q = query(q, limit(20));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map the results to an array of products
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('slide123');

    return NextResponse.json(products);
  } catch (e) {
    console.error('Failed to load products', e);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}






