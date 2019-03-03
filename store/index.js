export const state = () => ({
  names: {
    'Rich': 0,
    'Laurel': 1,
    'Quinn': 1
  }
})

export const mutations = {
  addName (state, name) {
    state.names = { ...state.names, [name]: 1 }
  },
  voteName (state, name) {
    state.names[name] += 1
  }
}

export const actions = {
  createName ({ commit, state }, name) {
    if (name === '') return
    if (state.names[name]) return commit('voteName', name)
    return commit('addName', name)
  }
}
