<template>
  <img :src="src" :class="className">
</template>

<script>
import mediaquery from '~/plugins/mediaquery.mixin'
import imagehosting from '~/plugins/imagehosting.mixin'

export default {
  name: 'InlineImage',

  mixins: [
    mediaquery,
    imagehosting
  ],

  props: {
    img: String,
    pos: {
      type: String,
      default: 'left'
    }
  },

  computed: {
    src () {
      if (this.mediaquery.m) {
        return this.imagehosting_path(480, this.img)
      }

      return this.imagehosting_path(960, this.img)
    },

    className () {
      const className = ['inline-image']

      if (this.pos === 'left') { className.push('inline-image--left') }
      if (this.pos === 'right') { className.push('inline-image--right') }

      return className
    }
  }

}
</script>

<style lang="scss">
@import '~/assets/uikit.variables.scss';

.inline-image {

  @media (min-width: $breakpoint-medium) {
    &--left,
    &--right {
      max-width: 400px;
      max-height: 400px;
    }

    &--left {
      float: left;
      transform: translateX($global-medium-gutter * -1);
    }

    &--right {
      float: right;
      transform: translateX($global-medium-gutter);
    }
  }
}

</style>
