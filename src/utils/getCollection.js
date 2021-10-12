import { getDataBase } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getCollection (collectionName) {
    const itemCollection = collection(getDataBase(), collectionName);
    const itemSnapshot = await getDocs(itemCollection);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    return itemList;
}

export async function setCollection (collectionName, data) {
    collection(getDataBase(), collectionName)
    .add(data)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    // https://firebase.google.com/docs/firestore/quickstart#web-version-8_2
}