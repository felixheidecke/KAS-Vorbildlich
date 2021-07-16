<template>
  <section :class="className">
    <slot />
  </section>
</template>

<script>
import { isString } from 'lodash'

export default {
  props: {
    size: {
      type: [String, Boolean],
      default: false
    },
    margin: {
      type: [String, Boolean],
      default: false
    }
  },

  computed: {
    className () {
      const className = ['uk-container']

      if (this.size) { className.push(`uk-container-${this.size}`) }

      if (this.margin && isString(this.margin)) { className.push(`uk-margin-${this.margin}`) }

      if (this.margin && !!this.margin) { className.push('uk-margin') }

      return className
    }
  }
}
</script>
