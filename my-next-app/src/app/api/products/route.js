import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/app/firebaseConfig";
import { NextResponse } from "next/server";

const db = getFirestore(app);


export async function GET(req,res) {
     
    let products = [];
    try{
    const querySnapshot = await getDocs(collection(db, "products"));
   products = querySnapshot.map((doc) => {
    //   console.log(`${doc.id} => ${doc.data().name}, ${doc.data().email}`);
    return doc;
    });
    }
    catch(e){
        console.log("Failed to load products",e);

    }
     console.log(products)
    return NextResponse.json({ products });

  }
  
//   getProducts();