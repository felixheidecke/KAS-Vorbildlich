<template lang="pug">
  a(:href="link" target="_blank").uk-text-meta
    slot
</template>

<script>
export default {
  props: ['link']
}
</script>

<style scoped>
a {
  font-size: 12px;
}

a:before {
  content: 'Credit: '
}
</style>
