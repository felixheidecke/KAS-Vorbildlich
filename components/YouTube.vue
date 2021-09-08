<template>
  <div :class="className">
    <iframe
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
import mediaquery from '~/plugins/mediaquery.mixin'

export default {
  mixins: [
    mediaquery
  ],

  props: {
    videoId: {
      type: String,
      default: 'S7SLep244ss',
      require: true
    },

    aspectRatio: {
      type: String,
      default: '16:9'
    },

    clean: Boolean,

    autoplay: Boolean,

    loop: Boolean,

    controls: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    src () {
      let src = 'https://www.youtube-nocookie.com/embed/' + this.videoId + '?'

      if (this.autoplay) { src += 'autoplay=1&' }

      if (this.loop) { src += 'loop=1&' }

      if (!this.controls) { src += 'controls=0&' }

      return src
    },

    className () {
      if (this.clean) {
        return
      }

      const className = [
        '$YouTube',
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

<style lang="scss" scoped>
@import 'uikit-variables';

iframe {
  position: absolute;
  width: 100%;
  height: 100%;
}

.uk-padding-small iframe {
  position: absolute;
  width: calc(100% - #{$global-gutter});
  height: calc(100% - #{$global-gutter});
}
</style>
