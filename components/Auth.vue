<template>
  <div class="auth level">
    <template v-if="$store.state.user">
      {{ $store.state.user.displayName }}
      <button class="button" @click="logout">
        Sign out
      </button>
    </template>
    <template v-else>
      <button class="button" @click="googleLogin">
        Sign in with Google
      </button>
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
