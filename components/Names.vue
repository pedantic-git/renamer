<template>
  <div class="panel renamer-names">
    <div class="panel-heading has-background-primary has-text-white">
      Names
    </div>
    <name v-for="name in sortedNames" :key="name.name" v-bind="name" @vote="addName(name.name)" />
    <form v-if="$store.state.user" class="panel-block" @submit.prevent="addNewName">
      <input v-model="newName" class="input renamer-names--input" placeholder="...or suggest a name"></input>
      <button type="submit" class="button" title="Add name">
        <span class="icon has-text-link">
          <i class="material-icons">add</i>
        </span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { db } from '~/plugins/firebase'

import Name from '~/components/Name'

export default {
  components: {
    Name
  },
  data () {
    return {
      newName: ''
    }
  },
  computed: {
    sortedNames () {
      return this.$store.state.names.concat().sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    }
  },
  created () {
    this.$store.dispatch('setNamesRef', db.collection('names'))
  },
  methods: {
    addNewName () {
      this.addName(this.newName)
      this.newName = ''
    },
    ...mapActions([
      'addName'
    ])
  }
}
</script>

<style lang="scss">
.renamer-names {
  min-width: 20em;
  background-color: #ffffff;
}
.renamer-names--input {
  margin-right: 0.5em;
}
</style>
