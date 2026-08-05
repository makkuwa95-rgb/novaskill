import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "@/lib/firestore";

import type { Course } from "@/types/course";

export async function getAllCourses() {
  const snapshot = await getDocs(collection(db, "courses"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function createCourse(course: Course) {
  await setDoc(
    doc(db, "courses", course.slug),
    course
  );
}

export async function updateCourse(
  slug: string,
  data: Partial<Course>
) {
  await updateDoc(
    doc(db, "courses", slug),
    data
  );
}

export async function deleteCourse(slug: string) {
  await deleteDoc(
    doc(db, "courses", slug)
  );
}