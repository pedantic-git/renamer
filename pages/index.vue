<template>
  <section class="container renamer-main-section">
    <div class="panel renamer-names">
      <div class="panel-heading">
        Names
      </div>
      <name v-for="name in sortedNames" :key="name.name" v-bind="name" @vote="addName(name.name)" />
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
    }
  }
}
</script>

<style>
.renamer-main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
}
.renamer-names--input {
  margin-right: 0.5em;
}
</style>
