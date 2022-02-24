import firebase from 'firebase'
 const firebaseConfig = {
  apiKey: "AIzaSyARecx7FXXKEHXPaPqKPvcAcMiMA93yEqM",
  authDomain: "class-90-dedd4.firebaseapp.com",
  databaseURL: "https://class-90-dedd4-default-rtdb.firebaseio.com",
  projectId: "class-90-dedd4",
  storageBucket: "class-90-dedd4.appspot.com",
  messagingSenderId: "875427475214",
  appId: "1:875427475214:web:8ce834cfbf9277428b715f"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase.database()
