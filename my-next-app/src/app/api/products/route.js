import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../firebaseConfig";
import { NextResponse } from "next/server";

const db = getFirestore(app);
let products = [];
export async function GET(req,res) {
    console.log('123456789d1234567890')
    
    try{
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log(querySnapshot)
    products = querySnapshot.docs.map((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        return {
            id: doc.id,
            ...doc.data() // Spread the document data
        };
        
    });
    console.log(products)
    }
    catch(e){
        console.log("Failed to load products",e);

    }
    //  console.log(products,'1')
    return NextResponse.json({ products });

  }