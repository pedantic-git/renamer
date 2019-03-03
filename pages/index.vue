<template>
  <section class="container renamer-main-section">
    <div class="panel renamer-names">
      <div class="panel-heading">
        Names
      </div>
      <name v-for="name in sortedNames" :key="name" :name="name" />
      <form class="panel-block" @submit.prevent="addName">
        <input v-model="newName" class="input renamer-names--input"></input>
        <button type="submit" class="button">
          +
        </button>
      </form>
    </div>
  </section>
</template>

<script>
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
      return Object.keys(this.$store.state.names).sort()
    }
  },
  methods: {
    addName () {
      this.$store.dispatch('createName', this.newName)
      this.newName = ''
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
