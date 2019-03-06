<template>
  <div class="container">
    <div class="renamer-names">
      <div v-for="column in nameColumns" :key="column[0].name">
        <div class="panel renamer-names__panel">
          <name v-for="name in column" :key="name.name" v-bind="name" @vote="addName(name.name)" />
        </div>
      </div>
    </div>
    <div class="renamer-names">
      <div class="panel renamer-names__panel renamer-names__panel--add">
        <form v-if="$store.state.user" class="panel-block" @submit.prevent="addNewName">
          <input v-model="newName" class="input renamer-names__input" placeholder="...or suggest a name"></input>
          <button type="submit" class="button" title="Add name">
            <span class="icon has-text-link">
              <i class="material-icons">add</i>
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import chunk from 'chunk'
import { mapActions } from 'vuex'
import { db } from '~/plugins/firebase'

import Name from '~/components/Name'

export default {
  components: {
    Name
  },
  data () {
    return {
      width: window.innerWidth,
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
    },
    nColumns () {
      if (this.width < 735) {
        return 1
      } else if (this.width < 1280) {
        return 2
      } else {
        return 3
      }
    },
    nameColumns () {
      return chunk(this.sortedNames, Math.ceil(this.sortedNames.length / this.nColumns))
    }
  },
  created () {
    this.$store.dispatch('setNamesRef', db.collection('names'))
    window.addEventListener('resize', this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    addNewName () {
      this.addName(this.newName)
      this.newName = ''
    },
    handleResize () {
      this.width = window.innerWidth
    },
    ...mapActions([
      'addName'
    ])
  }
}
</script>

<style lang="scss">
.renamer-names {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
.renamer-names__panel {
  margin: 0 0.5em;
  width: 20em;
  background-color: #ffffff;
}
.renamer-names__panel--add {
  margin-top: 1em;
}
.renamer-names__input {
  margin-right: 0.5em;
}
</style>
