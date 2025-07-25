import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_STOREAGE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGIN_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
};

initializeApp(firebaseConfig);
export const auth = getAuth();
auth.languageCode = "vi";
