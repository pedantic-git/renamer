import { firebaseMutations, firebaseAction } from 'vuexfire'
import { firebase } from '~/plugins/firebase'

const googleProvider = new firebase.auth.GoogleAuthProvider()

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
  setUser ({ commit }, { displayName, uid }) {
    commit('setUser', { displayName, uid })
  },
  googleLogin ({ commit }) {
    firebase.auth().signInWithPopup(googleProvider)
      .then(user => commit('setUser', user))
  },
  logout ({ commit }) {
    firebase.auth().signOut()
      .then(() => commit('setUser', null))
  }
}
