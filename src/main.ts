import App from "./App.vue";
import { router } from "./router";
import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./style.css";

const firebaseConfig = {
  apiKey: "AIzaSyDduX7xToXWkrCBvGoyR5iNKQOzClWTWdw",
  authDomain: "nancy-web.firebaseapp.com",
  projectId: "nancy-web",
  storageBucket: "nancy-web.appspot.com",
  messagingSenderId: "147878588129",
  appId: "1:147878588129:web:81de67106be1bcc4d911a0",
  measurementId: "G-8PWL0E80BW",
};

createApp(App).use(router).mount("#app");
