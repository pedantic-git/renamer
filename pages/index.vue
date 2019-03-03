<template>
  <section class="container renamer-main-section">
    <div class="panel renamer-names">
      <div class="panel-heading">
        Names
      </div>
      <name v-for="name in sortedNames" :key="name.name" v-bind="name" v-on:vote="addName(name.name)" />
      <form class="panel-block" @submit.prevent="addNewName">
        <input v-model="newName" class="input renamer-names--input" placeholder="...or suggest a name"></input>
        <button type="submit" class="button">
          +
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import Name from '~/components/Name'

import { db } from '~/plugins/firebase'
const names = db.collection('names')

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
    this.$store.dispatch('setNamesRef', names)
  },
  methods: {
    addNewName () {
      this.addName(this.newName)
      this.newName = ''
    },
    addName (nameStr) {
      const fbname = names.doc(nameStr)
      db.runTransaction((t) => {
        t.get(fbname).then((doc) => {
          if (doc.exists) {
            fbname.update({ value: doc.data().value + 1 })
          } else {
            fbname.set({ name: nameStr, value: 1 })
          }
        })
      })
    }
  }
}
</script>

<style>
.renamer-main-section {
  display: flex;
  justify-content: center;
  margin-top: 4em;
}
.renamer-names--input {
  margin-right: 0.5em;
}
</style>
