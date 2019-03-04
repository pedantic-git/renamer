<template>
  <div class="renamer-main">
    <section class="section">
      <div class="container">
        <h1 class="title is-2 is-spaced">
          Help rename your friend
        </h1>
        <h2 class="subtitle is-spaced">
          <a href="#details">
            ➔ What's this?
          </a>
        </h2>
        <div v-if="!$store.state.user" class="notification is-warning">
          You are not signed in. Please sign in above to make suggestions.
        </div>
      </div>
    </section>
    <section class="section">
      <names />
    </section>
    <section class="section">
      <div id="details" class="box content">
        <h2 class="has-text-primary">
          What's this?
        </h2>
        <p>Around this time last year, your friend <a href="https://twitter.com/pedantic_git">@pedantic_git</a> began the process of coming out to the world <a href="http://richd.me/2018/10/the-im-non-binary-blog-post/">as non-binary</a>.</p>
        <p>Since then, they've continued to be known by a name that is a variant of their birth name, and it doesn't fit. But naming things is hard! So they're asking for your help.</p>
        <h3>How to use this thing</h3>
        <p>The table up there has a list of all the names that have been suggested so far and a tally of their votes.</p>
        <p>You'll need to sign in using a Google account using the button at the top of the page before you are given the controls. Sorry if you don't have a Google account.</p>
        <p><b>Any names you think sound like a good name for your friend, click the <span class="icon has-text-link"><i class="material-icons">thumb_up</i></span> next to them to add a vote.</b></p>
        <p>Or suggest another name (see below) by filling in the blank box at the bottom and clicking the <span class="icon has-text-link"><i class="material-icons">add</i></span>.</p>
        <p>You can suggest as many names as you like and <b>vote as many times as you like</b>. Go wild, if you like.</p>
        <h3>What are good names?</h3>
        <p>Don't feel restricted by this, but here are some ideas about names I'm likely to like:</p>
        <ul>
          <li>"Gender neutral" names; i.e. not used almost exclusively by either male or female people.</li>
          <li>Names that don't make a British person think "man" when they hear them without seeing someone's face. For example, names like Ashley, Chris and Sam are gender-neutral but have a "male bias" attached to them. Names that make people think "woman" are fine.</li>
          <li>Names that have their origins in Western Europe. I don't want to feel like I'm appropriating a culture that I don't have any part of.</li>
          <li>Plants, trees, nature names are good.</li>
          <li>Mythology and literature names might be good too.</li>
          <li>Totally made up names are good too!</li>
          <li>Could be double-barrelled (like the non-binary author Meg-John Barker) if it's really good.</li>
          <li>Preferably not already the name of a member of the local non-binary community. I know you probably can't know, but this is likely to affect the decision.</li>
          <li>No emojis or other extended Unicode characters please. And it should start with a capital letter.</li>
          <li>You can suggest Boaty McBoatFace if you like. The winner is not (necessarily) going to be the one with the most votes. And no, it will not win.</li>
        </ul>
        <p>The <a href="https://www.behindthename.com/random/">Random Name Generator</a> might help you!</p>
        <h3>Your data</h3>
        <p>Yes, you have to sign in to use this. A log is kept of who voted for what, primarily to avoid someone I don't know coming from the internet and making loads of ridiculous suggestions. That data is not shared with anyone.</p>
        <h3>How this was made</h3>
        <p>It's a <a href="https://nuxtjs.org/">Nuxt</a> app backed by the amazing <a href="https://firebase.google.com/docs/firestore/">Firebase</a> realtime database: the first time I'm using it! The realtime functionality of this database is pretty amazing - if someone votes while you're looking at it you'll see the vote increment without needing to reload the page.</p>
        <p>You can see the source code on <a href="https://github.com/pedantic-git/renamer">GitHub</a> and I'm happy for you to fork and remix it, but do let me know if you do!</p>
      </div>
    </section>
  </div>
</template>

<script>
import Names from '~/components/Names'

export default {
  components: {
    Names
  }
}
</script>

<style>
.renamer-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#details {
  max-width: 55em;
}
#details span {
  vertical-align: middle;
}
</style>
