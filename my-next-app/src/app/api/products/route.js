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

const db = admin.firestore();;
let products = [];
export async function GET(req,res) {
    // console.log('123456789d1234567890')
    const { searchParams } = new URL(req.url);
    
    const category = searchParams.get('category'); // Get the 'category' query param
    const search = searchParams.get('search');
    const sort = searchParams.get('order');
    const limitCount = searchParams.get('limitCount');
    const lastVisible = searchParams.get('lastVisible');
    console.log(search,'title');
    try{
        const productsRef = db.collection('products'); // Initialize Firestore collection reference
        let q = productsRef; // Start with a collection reference

    // Apply search (e.g., by title or name)
    if (search && search.trim()) {
        console.log('search')
      q = q.where('title', '>=', search).where('title', '<=', search + '\uf8ff');
    }
    // Apply filter (e.g., by category)
    if (category && category.trim()) {
        console.log(category,'123')
       
      q = q.where('category', '==', category);
    //   console.log(q)
    }
    
    // Apply sorting (e.g., by price or another field)
    if (sort && sort.trim()) {
      q = q.orderBy('price', sort); // 'asc' or 'desc'
    }
   console.log('1')
  // Apply pagination using `startAfter`
    if (lastVisible) {
      const lastVisibleDocRef = await db.doc(`products/${lastVisible}`).get();
       if (lastVisibleDocRef.exists()) {
        q = q.startAfter(lastVisibleDocRef);
          }
     }
  
    // Apply limit
      q = q.limit(20)
    // Execute the query
    const querySnapshot = await q.get();
    //  console.log('qss')
    // Map the results to an array of products
     products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(searchParams)

            // Get the last visible document for pagination
            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            // console.log(products[1],'1')
          return NextResponse.json({ products, lastVisible: lastVisibleDoc?.id || null });
   
    }
    catch(e){
        console.log("Failed to load products",e);
        return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });

    }

  }









