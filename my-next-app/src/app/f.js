const { getFirestore, collection, getDocs } = require("firebase/firestore");
const app = require("./firebaseConfig");

const db = getFirestore(app);

async function getUsers() {
    console.log('123')
  const querySnapshot = await getDocs(collection(db, "products"));
//   console.log(querySnapshot)
  querySnapshot.docs.forEach((doc) => {
    console.log('12345')
    console.log(`${doc.id} => ${doc.data().brand}, ${doc.data().category}`);
  });
}

// getUsers();