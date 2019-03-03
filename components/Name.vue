<template>
  <div class="renamer-name panel-block">
    <div class="level" style="width:100%">
      <div class="level-left">
        <div class="level-item">
          {{ name }}
        </div>
      </div>
      <div class="level-right">
        <div class="level-item tag is-link">
          {{ value }}
        </div>
        <button class="button level-item" @click="vote">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    value () {
      return this.$store.state.names[this.name]
    }
  },
  methods: {
    vote () {
      this.$store.commit('voteName', this.name)
    }
  }
}
</script>
