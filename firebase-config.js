// firebase-config.js

import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the database
const database = firebase.database();

// Realtime database functions
export const writeData = (path, data) => {
    return database.ref(path).set(data);
};

export const readData = (path) => {
    return database.ref(path).once('value');
};

export const updateData = (path, data) => {
    return database.ref(path).update(data);
};

export const deleteData = (path) => {
    return database.ref(path).remove();
};
