import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDduX7xToXWkrCBvGoyR5iNKQOzClWTWdw",
  authDomain: "nancy-web.firebaseapp.com",
  projectId: "nancy-web",
  storageBucket: "nancy-web.appspot.com",
  messagingSenderId: "147878588129",
  appId: "1:147878588129:web:81de67106be1bcc4d911a0",
  measurementId: "G-8PWL0E80BW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
