import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxl9elqCbSe_WBaSgqCDW2NpZzxN4V3fM",
  authDomain: "react-store-ecaa9.firebaseapp.com",
  databaseURL: "https://react-store-ecaa9.firebaseio.com",
  storageBucket: "react-store-ecaa9.appspot.com",
  messagingSenderId: "348897907585",
  appId: "1:348897907585:web:22e10be7c4e9c1d4fd0e80",
  measurementId: "G-8HN1MPWD7Y",
  projectId: "react-store-ecaa9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserDocument = async ({ user, otherAttributes }) => {
  if (user) {
    const userReference = firestore.doc(`users/${user.uid}`); //gets us into that document or collection if you use .collection
    const snapShot = await userReference.get();
    if (!snapShot.exists) {
      const { email } = user;
      const dateCreated = new Date();
      try {
        await userReference.set({
          email,
          dateCreated,
          ...otherAttributes,
        });
      } catch (error) {
        console.log(
          "Error Encountered : Creating New User in the Database",
          error
        );
      }
    }
    return userReference; //incase you want to use the user Reference from wherever you called this function.
  }
};

export const createCollectionAndDocuments = async (
  collectionName,
  ItemsToAdd
) => {
  const collectionReference = firestore.collection(collectionName);

  const batch = firestore.batch();
  ItemsToAdd.forEach((item) => {
    const newDocumentReference = collectionReference.doc();
    batch.set(newDocumentReference, item);
  });
  return await batch.commit();
};

export const transformShopDataCollection = (snap) => {
  const transformedShopData = snap.docs.map((documentItem) => {
    const { title, items } = documentItem.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: documentItem.id,
      title,
      items,
    };
  });
  return transformedShopData.reduce((accumulatedValue, shopItem) => {
    accumulatedValue[shopItem.title.toLowerCase()] = shopItem;
    return accumulatedValue;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
