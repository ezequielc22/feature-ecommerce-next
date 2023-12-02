import { NextResponse } from "next/server";
import { getDoc,doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(req, {params}){

    const { productId } = params;
    const productRef = doc(db, 'products', productId);
    const productDoc = await getDoc(productRef);
    const productData = productDoc.data();
     return NextResponse.json(productData);

}
