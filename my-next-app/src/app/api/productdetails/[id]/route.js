import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../../firebaseConfig";
import { NextResponse } from "next/server";

const db = getFirestore(app);

export async function GET(req, { params }) {
  let id = params.id;
  id = id.padStart(3,'0');
  console.log(id, 'id');

  try {
    // Correctly referencing the document by 'products' collection and id
    const docRef = doc(db, 'products', id); // Firestore ids are strings

    // Fetching the document using getDoc (not getDocs)
    const productSnap = await getDoc(docRef);
    console.log('pkbgxcfgh')
    if (productSnap.exists()) {
        console.log('okasambe')
      // If the document exists, prepare the product data
      const product = { id: productSnap.id, ...productSnap.data() };
      // console.log(product,'1234567890poiuyvvcdsw')
      return NextResponse.json(product);
    } else {
      // If no document is found
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
  } catch (e) {
    console.log("Failed to load product", e);
    return NextResponse.json({ message: "Failed to load product" }, { status: 500 });
  }
}


