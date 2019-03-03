import { firebaseMutations, firebaseAction } from 'vuexfire'

export const state = () => ({
  names: []
})

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  setNamesRef: firebaseAction(({ bindFirebaseRef }, ref) => {
    bindFirebaseRef('names', ref)
  })
}
