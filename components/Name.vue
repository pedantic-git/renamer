<template>
  <div class="renamer-name panel-block">
    <div class="level is-mobile" style="width:100%">
      <div class="level-left">
        <span class="level-item">
          {{ name }}
        </span>
      </div>
      <div class="level-right">
        <span class="level-item tag is-link">
          {{ value }}
        </span>
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
    },
    value: {
      type: Number,
      required: true
    }
  },
  methods: {
    vote () {
      this.$emit('vote')
    }
  }
}
</script>
