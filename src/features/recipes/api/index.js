import firebase from "react-native-firebase";

const recipesReference = firebase.firestore().collection("recipes");

export const loadRecipesListing = async () =>
  new Promise((resolve, reject) => {
    recipesReference
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
        resolve({ success: true, data });
      })
      .catch(error => reject({ success: false, error }));
  });
