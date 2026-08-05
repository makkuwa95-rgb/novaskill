import { doc, getDoc } from "firebase/firestore";
import { db } from "./firestore";

export async function getUserProfile(uid: string) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return snap.data();
}