import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAFmGsWvn_CRpMmSB8jtt5RZPHTNmcotfc",
  authDomain: "coderhouse-ecommerce-66f9b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-66f9b",
  storageBucket: "coderhouse-ecommerce-66f9b.appspot.com",
  messagingSenderId: "24800534851",
  appId: "1:24800534851:web:f342d78a12bafc2b8b8ff6"
}

const app = initializeApp(firebaseConfig)

export function getDataBase() {
  return getFirestore(app);
}
