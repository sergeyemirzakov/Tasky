import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyC4YOa6fxKO9_F81rhu3CrWTuMugx8UcL8',
  authDomain: 'tasky-8c4c5.firebaseapp.com',
  projectId: 'tasky-8c4c5',
  storageBucket: 'tasky-8c4c5.appspot.com',
  messagingSenderId: '788464356877',
  appId: '1:788464356877:web:f4b51105c4e04b35f30f44',
});

export const db = getFirestore();
