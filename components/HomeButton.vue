<template>
  <nuxt-link tag="button" to="/" class="uk-position-fixed uk-position-small uk-position-top-left" uk-tooltip="title: Zur Startseite; pos: right">
    <Icon />
  </nuxt-link>
</template>

<script>
import Icon from '~/assets/icons/arrow_back_black_24dp.svg'

export default {
  components: { Icon }
}
</script>

<style scoped>
button {
  border: 0 none;
  background: rgba(255,255,255, .666);
  z-index: 1;
  padding: 0;
  cursor: pointer;
  border-radius: 4px;
}
</style>
