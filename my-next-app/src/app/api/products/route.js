import { getFirestore, collection, query, where, orderBy, startAfter, limit, getDocs,getDoc, doc } from 'firebase/firestore';
import app from "../../firebaseConfig"; // Import your Firebase config
import { NextResponse } from "next/server";

// Initialize Firestore (client-side)
const db = getFirestore(app);

export async function GET(req, res) {
  console.log('slide1234');
  const { searchParams } = new URL(req.url);
  console.log('slide2134')
  const category = searchParams.get('category'); // Get the 'category' query param
  const search = searchParams.get('search');
  const sort = searchParams.get('order');
  let lastVisible = searchParams.get('lastVisible');
  console.log(lastVisible, 'lastVisible');
  if(lastVisible){
  lastVisible = lastVisible.padStart(3,'0');
  }
  try {
    const productsRef = collection(db, 'products');
    let q = query(productsRef);
    
    // Apply last visible document for pagination
    if (lastVisible && lastVisible !=0) {
     // console.log(typeof lastVisible);
      const lastVisibleDocRef = doc(db, 'products', lastVisible);
    
      // Fetch the document snapshot of the last visible document
      const lastVisibleSnapshot = await getDoc(lastVisibleDocRef); // Use getDoc instead of getDocs
      
      // Check if the document exists and is valid
      if (lastVisibleSnapshot.exists()) {
        console.log('Document snapshot found');
        // Use the document snapshot to apply pagination with startAfter
        q = query(q, startAfter(lastVisibleSnapshot));
        console.log('Pagination applied');
      } else {
        console.log('No document snapshot found for pagination');
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
    console.log('limit')
    // Execute the query
    const querySnapshot = await getDocs(q);
  console.log('ref')
    // Map the results to an array of products
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  console.log(products[0],'slide123');

    return NextResponse.json(products, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (e) {
    console.error('Failed to load products1', e);
    return NextResponse.json(
      { error: 'Error fetching products' },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}






