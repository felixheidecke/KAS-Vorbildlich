<template>
  <div class="continue-reading uk-container uk-container-xlarge uk-margin-large-top">
    <h5 class="uk-hidden@s">
      Weitere Artikel
    </h5>
    <div class="continue-reading__slider">
      <div uk-slider="autoplay: true; autoplay-interval: 5000; center: true">
        <div class="uk-position-relative">
          <div class="uk-slider-container">
            <div class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid uk-grid-small uk-grid-divider">
              <nuxt-link v-for="(story, i) in stories" :key="i" :to="story.link" class="uk-text-small">
                {{ story.title }}:<br>
                {{ story.text }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { omitBy, shuffle } from 'lodash'
import stories from '@/assets/stories.js'

export default {
  computed: {
    stories () {
      const _stories = shuffle(stories)
      return omitBy(_stories, story => story.link === this.$route.path)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/uikit.variables.scss';

.continue-reading {
  .uk-text-small,
  .uk-text-meta {
    font-size: $global-font-size / 1.333;
  }
}

@media (min-width: 640px) {
  .continue-reading {
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      width: $global-gutter * 2;
    }

    &:before {
      left: $global-gutter;
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    }

    &:after {
      right: $global-gutter;
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    }
  }
}

</style>
