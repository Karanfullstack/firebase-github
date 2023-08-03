import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRapB6pr-BtpnbuEpEKeV0z7TU8mTXGBU",
  authDomain: "githubrepo-dc01d.firebaseapp.com",
  projectId: "githubrepo-dc01d",
  storageBucket: "githubrepo-dc01d.appspot.com",
  messagingSenderId: "849663855410",
  appId: "1:849663855410:web:cfdd7355f63992768aa52b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
