import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    projectId: 'pedantic-git-renamer'
  })
}

const db = firebase.firestore()

export { db }
