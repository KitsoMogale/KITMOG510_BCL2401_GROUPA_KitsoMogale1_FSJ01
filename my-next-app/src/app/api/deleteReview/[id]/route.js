import app from '../../../firebaseConfig'; // Import Firestore instance
import { doc, updateDoc, arrayRemove,getFirestore } from 'firebase/firestore';
import { NextResponse } from 'next/server';

const db = getFirestore(app);

export async function POST(req) {
  console.log('1234567uhb cdr')
  try {
    const body = await req.json(); // Parse request body
    const { id, review } = body; // Extract id and the review to delete
    //  const id = params.id;
     console.log(id,review)
    if (!id|| !review ) {
      return NextResponse.json({ error: 'Missing document ID or review to delete' }, { status: 400 });
    }

    // Get a reference to the document
    const docRef = doc(db, 'products', `00${id}`);
    console.log('12345678')
    // Update the 'reviews' field by removing the specified review from the array
    await updateDoc(docRef, {
      reviews: arrayRemove(review), // Removes the review from the array
    });
   console.log('12345tfdcvbh')
    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}


