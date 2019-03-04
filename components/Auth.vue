<template>
  <div class="navbar-end">
    <template v-if="$store.state.user">
      <a class="navbar-item" @click="logout">
        Sign out {{ $store.state.user.displayName }}
      </a>
    </template>
    <template v-else>
      <a class="navbar-item" @click="googleLogin">
        Sign in with Google
      </a>
    </template>
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  mounted () {
    firebase.auth().onAuthStateChanged(user => this.setUser(user))
  },
  methods: {
    ...mapActions([
      'googleLogin',
      'logout',
      'setUser'
    ])
  }
}
</script>
