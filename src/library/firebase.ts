import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: 'anime-list-e8495.firebaseapp.com',
  projectId: 'anime-list-e8495',
  storageBucket: 'anime-list-e8495.appspot.com',
  messagingSenderId: '561397497668',
  appId: '1:561397497668:web:bd8728e4b3025c405aa111',
}

const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDb = getFirestore(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
