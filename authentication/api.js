// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqf3fJCVYQPoJ6XzSRiE66agtWgQWQZoE",
  authDomain: "foodivery-1c55f.firebaseapp.com",
  projectId: "foodivery-1c55f",
  storageBucket: "foodivery-1c55f.appspot.com",
  messagingSenderId: "915569507918",
  appId: "1:915569507918:web:763588658bf70d60d60d1f"
};


let app;

if(firebase.apps.length===0){

    app = firebase.initializeApp(firebaseConfig);
}

else{
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};