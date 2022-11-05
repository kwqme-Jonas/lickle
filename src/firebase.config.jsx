import {getApp, getApps, initializeApp } from 'firebase/app';

import {getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBDxZyDnt7bSw-rgvUzy9SlqhQ1Nu8x5_8",
    authDomain: "lickles.firebaseapp.com",
    databaseURL: "https://lickles-default-rtdb.firebaseio.com",
    projectId: "lickles",
    storageBucket: "lickles.appspot.com",
    messagingSenderId: "832136067303",
    appId: "1:832136067303:web:02e1837441439851fd8a42",
    measurementId: "G-E8BL4CBEMH"
};

const app = getApps.lenght > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};