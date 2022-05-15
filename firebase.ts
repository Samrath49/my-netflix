// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration somethings are missing
const firebaseConfig = {
  apiKey: 'AIzaSyBSL1_RZigZdk0TdV1ElyQnhfAQcXI7jZQ',
  authDomain: 'my-netflix-d9b20.firebaseapp.com',
  projectId: 'my-netflix-d9b20',
  storageBucket: 'my-netflix-d9b20.appspot.com',
  messagingSenderId: '996882323672',
  appId: '1:996882323672:web:e36fc25d614552e505dfad',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth()

// db.collection("products").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });

// console.log('My DB', db)

export default app
export { auth, db }

export interface Product {
  name: string
}
