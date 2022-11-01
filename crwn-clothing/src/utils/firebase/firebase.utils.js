// install firebase with yarn add firebase
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import  {
  getFirestore,
  doc,
  getDoc,
  SetDoc,
  setDoc
} from 'firebase/firestore';

// connect firebase to app from the firebase console on the website
// copy and paste the below from firebase once that's done
const firebaseConfig = {
  apiKey: "AIzaSyD-FSYrI-0nFJFhpK5oSsyi8OeRf0DBHRY",
  authDomain: "crwn-clothing-db-a7e7b.firebaseapp.com",
  projectId: "crwn-clothing-db-a7e7b",
  storageBucket: "crwn-clothing-db-a7e7b.appspot.com",
  messagingSenderId: "827721451659",
  appId: "1:827721451659:web:1c53b8f4fdab5f7d53ec8e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initializes google's authentication
// also need to link the provider through the firebase console
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// access to database in Firebase console
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};