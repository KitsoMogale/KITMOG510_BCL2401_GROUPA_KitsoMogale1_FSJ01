import { getFirestore, collection, getDocs,doc } from "firebase/firestore";
import app from "@/app/firebaseConfig";
import { NextResponse } from "next/server";

const db = getFirestore(app);


export async function GET(req,res,{params}) {

    const id = params.id

   id = id.toString().padStart(3, "0");
     
    let products = [];
    try{
         const docRef = doc(db,'products',id)
    }
    catch(e){
        console.log("Failed to load products",e);

    }
     console.log(products)
    return NextResponse.json({ products });

  }