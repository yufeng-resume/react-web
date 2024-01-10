import { getDocs, collection, Firestore } from 'firebase/firestore';

export async function getAllDocs(firestore: Firestore, collectionName: string) {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docs;
}
