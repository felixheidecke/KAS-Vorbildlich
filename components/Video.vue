<template>
  <div :class="className">
    <video :autoplay="autoplay" :muted="autoplay" :controls="controls" :loop="loop" :poster="poster">
      <source v-for="(source, type) in sources" :key="type" :src="source" :type="type">
    </video>
  </div>
</template>

<script>
import mediaquery from '~/plugins/mediaquery.mixin'

export default {

  mixins: [
    mediaquery
  ],
  props: {
    src: {
      type: Object,
      default () {
        return {
          'video/webm': 'https://dl8.webmfiles.org/big-buck-bunny_trailer.webm',
          'video/quicktime': 'https://download.blender.org/peach/trailer/trailer_480p.mov'
        }
      }
    },
    srcS: {
      type: Object,
      default () { return null }
    },
    srcM: {
      type: Object,
      default () { return null }
    },
    srcL: {
      type: Object,
      default () { return null }
    },
    srcXL: {
      type: Object,
      default () { return null }
    },
    controls: Boolean,
    autoplay: Boolean,
    loop: Boolean,
    poster: String
  },

  computed: {
    sources () {
      if (this.mediaquery.xl && this.srcXL) { return this.srcXL }

      if (this.mediaquery.l && this.srcL) { return this.srcL }

      if (this.mediaquery.m && this.srcM) { return this.srcM }

      if (this.mediaquery.s && this.srcS) { return this.srcS }

      return this.src
    },

    className () {
      const className = [
        '$Video',
        'uk-margin-medium-bottom'
      ]

      if (this.mediaquery.s) {
        className.push('uk-box-shadow-large')
        className.push('uk-padding-small')
      } else {
        className.push('uk-pull-small')
      }

      return className
    }
  }
}
</script>
