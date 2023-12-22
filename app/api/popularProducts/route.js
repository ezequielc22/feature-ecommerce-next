import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase/config";

export async function GET(){

    const productsRef = collection(db, "products");
    const q = query(productsRef, where('hasDiscount', '==', true))
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(doc => doc.data());
    return NextResponse.json(docs);
}