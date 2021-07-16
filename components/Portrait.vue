<template lang="pug">
  img(:class="className" :style="style" :alt="alt" :src="source")
</template>

<script>
import imagehosting from '~/plugins/imagehosting.mixin'
import mediaquery from '~/plugins/mediaquery.mixin'

export default {

  mixins: [
    imagehosting,
    mediaquery
  ],

  props: {
    src: String,
    alt: String,
    pos: String
  },

  computed: {
    source () {
      return this.imagehosting_path(480, this.src)
    },

    style () {
      if (!this.mediaquery.s) { return {} }

      return {
        'max-width': '220px',
        transform: 'translateX(-40px)'
      }
    },

    className () {
      const className = ['uk-border-rounded']

      if (this.pos === 'left') { className.push('uk-float-left') }

      if (this.pos === 'right') { className.push('uk-float-right') }

      if (!this.mediaquery.s) { className.push('uk-margin-bottom') }

      return className
    }
  }
}
</script>
