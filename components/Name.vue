<template>
  <div class="renamer-name panel-block">
    <div class="level is-mobile" style="width:100%">
      <div class="level-left">
        <span class="level-item">
          {{ name }}
        </span>
      </div>
      <div class="level-right">
        <span class="level-item tag">
          {{ value }}
        </span>
        <button v-if="$store.state.user" class="button level-item" title="I like this name!" @click="vote">
          <span class="icon has-text-link">
            <i class="material-icons">thumb_up</i>
          </span>
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
