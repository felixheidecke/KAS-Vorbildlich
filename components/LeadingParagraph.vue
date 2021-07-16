<template lang="pug">
  p(:class="className")
    slot
</template>

<script>
import mediaquery from '~/plugins/mediaquery.mixin'

export default {
  mixins: [
    mediaquery
  ],

  computed: {
    className () {
      const className = ['$leading-paragraph']

      if (this.mediaquery.s) {
        className.push('uk-text-lead')
      }

      return className
    }
  }
}
</script>
