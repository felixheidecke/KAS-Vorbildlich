<template lang="pug">
  section
    template(v-if="mediaquery.m")
      .inline-mood-image.uk-position-relative.uk-background-cover.uk-background-fixed.uk-light(:style="`background-image:url(${source})`")
        .inline-mood-image__textbox.uk-width-1-1.uk-position-bottom
          .uk-container.uk-container-small
            slot

    template(v-else)
      img(:src="source")
      Container(size="small" margin="small")
        slot

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
    img: {
      type: String,
      required: false
    }
  },

  computed: {
    source () {
      if (this.mediaquery.m) { return this.imagehosting_path(1920, this.img) }

      if (this.mediaquery.s) { return this.imagehosting_path(960, this.img) }

      return this.imagehosting_path(480, this.img)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/uikit.variables.scss';

.inline-mood-image {
  height: 100vh;

  &__textbox {
    background-color:rgba(black,0.666);
    padding: $global-gutter 0;
  }
}
</style>
