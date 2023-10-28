import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export function addReceipt(uid, date, location, address, items, amount) {
  addDoc(
    collection(db, "receipts", { uid, date, location, address, items, amount }),
    {
      uid: uid,
      date: date,
      location: location,
      address: address,
      items: items,
      amount: amount,
    }
  );
}
