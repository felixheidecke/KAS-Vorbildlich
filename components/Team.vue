<template>
  <section>
    <div uk-grid class="uk-grid uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
      <div v-for="member in team" :key="member.img">
        <img :src="member.img" :alt="member.text">
      </div>
    </div>
    <p class="uk-text-small">
      Auf dem Foto zu sehen (von links oben):
      <ul>
        <li v-for="member in team" :key="member.img" v-text="member.text" />
      </ul>
    </p>
  </section>
</template>

<script>
import { shuffle } from 'lodash'

export default {
  computed: {
    team () {
      const team = [
        {
          img: '/team/anna-klein.jpg',
          text: 'Anna Klein (Technikassistenz)'
        },
        {
          img: '/team/anorte-linsmayer.jpg',
          text: 'Anorte Linsmayer (Seminarleitung)'
        },
        {
          img: '/team/arnold-wande.jpg',
          text: 'Arnold Wande'
        },
        {
          img: '/team/britt-marie-lakaemper.jpg',
          text: 'Britt-Marie Lakämper'
        },
        {
          img: '/team/franka-bals.jpg',
          text: 'Franka Bals'
        },
        {
          img: '/team/hanna-loben.jpg',
          text: 'Hanna Loben'
        },
        {
          img: '/team/isabel-schneider.jpg',
          text: 'Isabel Schneider'
        },
        {
          img: '/team/jana-glose.jpg',
          text: 'Jana Glose'
        },
        {
          img: '/team/juliane-hessmann.jpg',
          text: 'Juliane Heßmann'
        },
        {
          img: '/team/marlene-resch.jpg',
          text: 'Marlene Resch'
        },
        {
          img: '/team/pia-steckelbach.jpg',
          text: 'Pia Steckelbach'
        },
        {
          img: '/team/sandra-wahle.jpg',
          text: 'Sandra Wahle'
        }
      ]

      return shuffle(team)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline;
  }

  li:not(:last-child):after {
    content: ', '
  }
}
</style>
