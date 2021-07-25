<template>
  <li @click="gotoLink">
    <div class="uk-position-relative">
      <img :src="imagehosting_path(960, img)" class="uk-width-expand" :alt="title">
      <h4 class="uk-position-bottom-left text-highlight uk-margin-remove uk-text-uppercase">
        {{ title }}
      </h4>
    </div>
    <p class="uk-padding-small uk-text-small">
      {{ text }}
    </p>
  </li>
</template>

<script>
import imagehosting from '~/plugins/imagehosting.mixin'

export default {
  mixins: [
    imagehosting
  ],

  props: {
    img: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    link: {
      type: String
    }
  },

  methods: {
    gotoLink () {
      if (!this.link) { return }

      this.$router.push({
        path: this.link
      })
    }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
  position: relative;
  transition: transform .5s;
}

li:hover {
  transform: scale(1.025) translateY(-2.5%);
}

h4 {
  transform: translate(14px, 14px);
}
</style>
