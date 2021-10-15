import {
  collection,
  addDoc,
  // setDoc,
  // doc,
} from "firebase/firestore";
import db from "./firebase";
// import { useParams } from "react-router-dom";

export const handleNew = async () => {
  const name = prompt("Enter name");
  const start = prompt("Enter start date");
  const end = prompt("Enter end date");
  // let { topicId } = useParams();

  const collectionRef = collection(db, "todos");
  const payload = { name, end, start };
  const docRef = await addDoc(collectionRef, payload);
  console.log("The new ID is: " + docRef.id);
};

export const handleEdit = async (id) => {
  //   const name = prompt("Enter name");
  //   const start = prompt("Enter start date");
  //   const end = prompt("Enter end date");
  //   const docRef = doc(db, "todos", id);
  //   const payload = { name, start, end };
  //   setDoc(docRef, payload);
};
