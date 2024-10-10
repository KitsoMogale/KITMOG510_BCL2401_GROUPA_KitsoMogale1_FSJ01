import app from '../../firebaseConfig'; // Import Firestore instance
import { doc, updateDoc, arrayUnion,getFirestore } from 'firebase/firestore';
import { NextResponse } from 'next/server';

const db = getFirestore(app);
export async function POST(req) {
    console.log('123post')
  try {
    console.log('start')
    const body = await req.json(); // Parse request body
    const { docId,comment,rating,date,reviewerName } = body; // Extract docId and the new review data

    if (!docId || !comment) {
      return NextResponse.json({ error: 'Missing document ID or review' }, { status: 400 });
    }

    // Get a reference to the document
    const docRef = doc(db, 'products', `00${docId}`);

    // Update the 'reviews' field by adding the new review to the existing array
    await updateDoc(docRef, {
      reviews: arrayUnion({comment,rating,date,reviewerName }), // Adds the new review to the array, preserving existing reviews
    });

    return NextResponse.json({ message: 'Review added successfully' });
  } catch (error) {
    console.error('Error adding review:', error);
    return NextResponse.json({ error: 'Failed to add review' }, { status: 500 });
  }
}
