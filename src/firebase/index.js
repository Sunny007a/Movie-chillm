import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDX-99sdzBpDF8KXtJguq2FbX3aVtwTRUs',
  authDomain: 'chillm-32269.firebaseapp.com',
  projectId: 'chillm-32269',
  storageBucket: 'chillm-32269.appspot.com',
  messagingSenderId: '318645190952',
  appId: '1:318645190952:web:f646a24ebfd7a4dc51d01d',
  measurementId: 'G-KTJML28D11'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const analytics = getAnalytics(app)

export { auth }
