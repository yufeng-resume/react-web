// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyB0GHIzx8nQEnVLHDkP7QSUcjGgtly9B08',
  authDomain: 'yufeng-resume.firebaseapp.com',
  projectId: 'yufeng-resume',
  storageBucket: 'yufeng-resume.appspot.com',
  messagingSenderId: '832717267595',
  appId: '1:832717267595:web:c330aaf0b6380562aeaa8e',
  measurementId: 'G-RVG1C9EY7X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LfCAUkpAAAAALzMcUkQoQx-Q9UseVjL-LIomU4d'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
getAnalytics(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const firestore = getFirestore(app);

// Export firebase storage
export const storage = getStorage(app);

// Export firebase auth
export const auth = getAuth(app);
