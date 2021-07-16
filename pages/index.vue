<template>
  <div>
    <MoodImage img="wer-sind-unsere-vorbilder.png" />
    <section class="uk-container uk-container-small uk-margin-xlarge">
      <h2 class="uk-h4 uk-margin-bottom uk-text-uppercase uk-text-center">
        <span class="text-highlight">Editorial</span>
      </h2>
      <div class="uk-column-1-2@s" :class="introTextClass">
        <p>Ob Kindheitshelden, Idole der Popkultur oder Vorbilder aus Familie, Berufswelt oder Alltag - wir alle blicken auf zu Menschen, die uns inspirieren oder faszinieren. Menschen, die Mut und Zivilcourage beweisen. Menschen, die sich für andere einsetzen und sich selbst dabei zurückstellen. Menschen, die an andere denken, statt nur an sich selbst. Vorbildlich.</p>
        <p>Wer sind diese Menschen und warum faszinieren und inspirieren sie uns? Hat die Pandemie etwas daran verändert, wie wir über Heldinnen und Helden denken? Haben wir heute andere Vorbilder als früher? Und welche Vorbilder brauchen wir als Gesellschaft überhaupt?</p>
        <p>
          Diesen Fragen sind wir im März 2021 in diesem Webdossier nachgegangen und haben dabei Menschen getroffen, die trotz schwerer Schicksalsschläge nie aufgegeben haben; Pionierinnen, die Wege in Politik, Wirtschaft und Sport geebnet haben; Alltagshelden in Pandemiezeiten; und sind in die Welten von Helden aus der Kindheit eingetaucht. Dabei sind wir nicht nur den faszinierenden Seiten von Vorbildern begegnet, sondern auch den manchmal ganz schön harten Herausforderungen. So unterschiedlich die Geschichten auch sind, eins haben sie gemeinsam: Sie überzeugen uns, dass jede Zeit ihre Heldinnen, Helden und Vorbilder braucht.
        </p>
      </div>
    </section>
    <section class="uk-container uk-container-medium">
      <TeaserGrid>
        <Teaser v-for="story in stories" :key="story.link" v-bind="story" />
      </TeaserGrid>
    </section>
    <section class="uk-container uk-container-small">
      <hr class="uk-margin-large-top uk-margin-large-bottom">

      <h5 class="uk-h4 uk-margin-bottom uk-text-uppercase">
        <span class="text-highlight">Wir über uns</span>
      </h5>
      <p class="uk-text-small">
        Wir sind neun Journalistinnen und ein Journalist der Journalistischen Nachwuchsförderung der Konrad-Adenauer-Stiftung. Für unser remotes Abschlussseminar haben wir uns im März 2021 auf die Suche nach Helden, Vorbildern und Idolen begeben. Gefunden haben wir spannende Geschichten von Menschen, die die Gesellschaft bereichern. Wir finden: Vorbildlich.
      </p>

      <Team />
    </section>
  </div>
</template>

<script>
import { shuffle } from 'lodash'
import mediaquery from '~/plugins/mediaquery.mixin'
import stories from '~/assets/stories.js'

export default {
  mixins: [mediaquery],

  computed: {
    stories () {
      return shuffle(stories)
    },

    introTextClass () {
      return (!this.mediaquery.s) ? 'uk-text-small' : ''
    }
  }

}
</script>

Teaser
