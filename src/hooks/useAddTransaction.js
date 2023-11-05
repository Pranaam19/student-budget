import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../assets/firebase/firebase";
// import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");

  //   const { userID } = useGetUserInfo();

  const addTransaction = async ({ description, amount, type }) => {
    await addDoc(transactionCollectionRef, {
      userID,
      type,
      description,
      amount,
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
