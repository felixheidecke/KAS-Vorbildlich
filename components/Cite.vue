<template>
  <cite :class="className">
    <slot />
  </cite>
</template>

<script>
import mediaquery from '~/plugins/mediaquery.mixin'

export default {
  mixins: [mediaquery],

  computed: {
    className () {
      if (this.mediaquery.s) {
        return 'uk-text-large'
      }

      return ''
    }
  }
}
</script>
