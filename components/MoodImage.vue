<template>
  <div :class="wrapperClass" :style="style">
    <div :class="headingWrapperClass">
      <h1 :class="headingClass">
        <slot />
      </h1>
      <slot name="intro" />
    </div>
  </div>
</template>

<script>
import mediaquery from '~/plugins/mediaquery.mixin'
import imagehosting from '~/plugins/imagehosting.mixin'

export default {
  name: 'MoodImage',

  mixins: [
    mediaquery,
    imagehosting
  ],

  props: {
    img: {
      type: String,
      default: ''
    },

    parallax: {
      type: Boolean
    }
  },

  computed: {
    wrapperClass () {
      const className = [
        'mood-image',
        'uk-position-relative',
        'uk-background-cover'
      ]

      if (this.parallax) {
        className.push('uk-background-fixed')
      }

      if (this.$slots.default) {
        className.push('mood-image--shadow')
        className.push('uk-light')
      }

      return className
    },

    headingWrapperClass () {
      const className = [
        'uk-position-bottom-center',
        'uk-position-z-index'
      ]

      if (this.mediaquery.s) {
        className.push('uk-position-large')
      } else {
        className.push('uk-position-small')
      }

      return className
    },

    headingClass () {
      const className = [
        'uk-margin-remove'
      ]

      if (this.mediaquery.s) {
        className.push('uk-heading-large')
      } else {
        className.push('uk-heading')
      }

      return className
    },

    style () {
      const style = [`background-image:url(${this.src})`]

      if (this.mediaquery.l) {
        style.push('height:100vh')
      } else {
        style.push('height:66.666vw')
        style.push('max-height:100vh')
      }

      return style.join(';')
    },

    src () {
      if (this.mediaquery.xl) { return this.imagehosting_path(1920, this.img) }

      if (this.mediaquery.l) { return this.imagehosting_path(1600, this.img) }

      if (this.mediaquery.m) { return this.imagehosting_path(1200, this.img) }

      if (this.mediaquery.s) { return this.imagehosting_path(960, this.img) }

      return this.imagehosting_path(640, this.img)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/uikit.variables.scss';

.mood-image--shadow:after {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  bottom: 0;
  height: 15vh;
  background-color: black;
  background: linear-gradient(0deg, rgba(0,0,0,0.666) 0%, rgba(0,0,0,0) 100%);

  @media (min-width: $breakpoint-small) {
    height: 40vh;
  }
}
</style>
