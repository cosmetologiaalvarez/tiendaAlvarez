import { getDataBase } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

export async function getCollection (collectionName) {
    const itemCollection = collection(getDataBase(), collectionName);
    const itemSnapshot = await getDocs(itemCollection);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    return itemList;
}

export async function setCollection (collectionName, data) {
    try {
        const docRef = await addDoc(collection(getDataBase(), collectionName), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}