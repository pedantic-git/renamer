import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBd3_j_tfVwEqGlf3-zajIAiBOB_BpvbOc',
    authDomain: 'pedantic-git-renamer.firebaseapp.com',
    databaseURL: 'https://pedantic-git-renamer.firebaseio.com',
    projectId: 'pedantic-git-renamer',
    storageBucket: 'pedantic-git-renamer.appspot.com',
    messagingSenderId: '406075811205'
  })
}

const db = firebase.firestore()

export { firebase, db }
