import { firebaseMutations, firebaseAction } from 'vuexfire'
import { firebase, db } from '~/plugins/firebase'

const googleProvider = new firebase.auth.GoogleAuthProvider()
const names = db.collection('names')
const log = db.collection('log')

export const state = () => ({
  names: [],
  user: null
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  ...firebaseMutations
}

export const actions = {
  setNamesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('names', ref)
  }),
  setUser ({ commit }, user) {
    if (user === null) {
      commit('setUser', null)
    } else {
      const { displayName, uid, email } = user
      commit('setUser', { displayName, uid, email })
    }
  },
  googleLogin ({ commit }) {
    firebase.auth().signInWithPopup(googleProvider)
      .then(user => commit('setUser', user))
  },
  logout ({ commit }) {
    firebase.auth().signOut()
      .then(() => commit('setUser', null))
  },
  addName ({ state }, nameStr) {
    if (state.user === null) return // must be signed in

    const nameDoc = names.doc(nameStr)
    db.runTransaction((t) => {
      return t.get(nameDoc).then((doc) => {
        if (doc.exists) {
          t.update(nameDoc, { value: doc.data().value + 1 })
        } else {
          t.set(nameDoc, { name: nameStr, value: 1 })
        }
      })
    })
    const ts = firebase.firestore.FieldValue.serverTimestamp()
    log.add({ uid: state.user.uid, email: state.user.email, name: nameStr, time: ts })
  }
}
