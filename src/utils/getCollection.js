import { getDataBase } from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export default async function getCollection (collectionName) {
    const itemCollection = collection(getDataBase(), collectionName);
    const itemSnapshot = await getDocs(itemCollection);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    return itemList;
}