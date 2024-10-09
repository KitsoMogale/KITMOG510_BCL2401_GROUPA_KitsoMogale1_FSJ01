import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../firebaseConfig";
import { NextResponse } from "next/server";

const db = getFirestore(app);

export async function GET(req, res) {
  console.log('cate 123');
  try {
    // Reference the single document in the 'categories' collection
    const categoryDocRef = doc(db, 'categories', 'allCategories'); // Replace 'yourDocumentId' with the actual ID

    // Fetch the document
    const categoryDoc = await getDoc(categoryDocRef);
    // console.log(categoryDoc.data())
    if (categoryDoc.exists()) {
      // Retrieve the array of categories from the document
      const categories = categoryDoc.data().categories; // Assumes the array is stored in the `categories` field

      // Return the array of categories
      return NextResponse.json(categories);
    } else {
      console.log("No such document!");
      return NextResponse.json({ error: 'No categories found' }, { status: 404 });
    }

  } catch (e) {
    console.log("Failed to load categories", e);
    return NextResponse.json({ error: 'Error fetching categories' }, { status: 500 });
  }
}
