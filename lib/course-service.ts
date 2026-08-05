import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firestore";

export async function getCourses() {
  const snapshot = await getDocs(collection(db, "courses"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getCourse(slug: string) {
  const snapshot = await getDoc(doc(db, "courses", slug));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}