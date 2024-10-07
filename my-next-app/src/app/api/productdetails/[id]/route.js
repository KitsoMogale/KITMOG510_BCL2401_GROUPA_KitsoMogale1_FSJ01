import { getFirestore, collection, getDocs,doc } from "firebase/firestore";
import app from "@/app/firebaseConfig";
import { NextResponse } from "next/server";

const db = getFirestore(app);


export async function GET(req,res,{params}) {

    const id = params.id

   id = id.toString().padStart(3, "0");
     
    let product;
    try{
         const docRef = doc(db,'products',id);
         getDocs(docRef)
         .then(doc=>{product = doc.data()})
    }
    catch(e){
        console.log("Failed to load products",e);

    }
     console.log(product)
    return NextResponse.json({ product });

  }