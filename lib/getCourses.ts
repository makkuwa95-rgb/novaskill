import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "./firestore";

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  level: string;
}

export async function getCourses(): Promise<Course[]> {
  const snapshot = await getDocs(collection(db, "courses"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Course, "id">),
  }));
}