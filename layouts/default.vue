<template>
  <div>
    <header>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <span class="navbar-item is-size-5 has-text-weight-bold">
            Renamer
          </span>
        </div>
        <div class="navbar-menu is-active">
          <auth />
        </div>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Auth from '~/components/Auth'

export default {
  components: {
    Auth
  }
}
</script>
