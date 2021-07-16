<template>
  <section :class="wrapperClass">
    <div class="uk-position-relative" @click="playPause">
      <img v-if="img" :src="img">
      <div :id="id" class="audio-player__waveform" :style="{ background: backgroundColor } " :class="{ 'uk-position-bottom' : img }" />
      <img v-show="img" src="/icons/icon-audio.svg" class="audio-player__icon uk-position-top-right uk-position-small">
    </div>
    <p hidden>
      <slot />
    </p>
  </section>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import { uniqueId } from 'lodash'

export default {
  name: 'AudioPlayer',

  directives: {
    class: {
      // directive definition
      inserted (el, binding) {
        console.log(binding)
        el.classList.add(binding.s)
      }
    }
  },

  props: {
    file: {
      type: String,
      required: true
    },

    img: {
      type: [String, Boolean],
      required: false,
      default: false
    },

    pos: {
      type: String,
      default: ''
    },

    backgroundColor: {
      type: String,
      default: 'rgba(0,0,0,.25)'
    },

    progressColor: {
      type: String,
      default: '#7fcff1'
    },

    waveColor: {
      type: String,
      default: '#e5f5fc'
    }
  },

  data () {
    return {
      isLoading: false,
      hasError: false,
      player: null
    }
  },

  computed: {
    wrapperClass () {
      const className = ['audio-player']

      if (this.pos === 'left') { className.push('audio-player--left') }

      if (this.pos === 'right') { className.push('audio-player--right') }

      return className
    },

    id () {
      return uniqueId('audio-player-')
    }
  },

  mounted () {
    this.isLoading = true

    this.player = WaveSurfer.create({
      barMinHeight: 1,
      barWidth: 2,
      closeAudioContext: true,
      container: '#' + this.id,
      cursorWidth: 0,
      height: 80,
      pixelRatio: 1,
      progressColor: this.progressColor,
      waveColor: this.waveColor,
      interact: false
    })

    this.player.load(this.file)

    this.player.on('ready', () => {
      this.isLoading = false
      this.hasError = false
    })
  },

  destroyed () {
    this.player.destroy()
  },

  methods: {
    playPause () {
      this.player.playPause()
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/uikit.variables.scss';

canvas {
  max-width: inherit !important;
}

.audio-player {
  cursor: pointer;

  &__icon {
    max-width: 46px;
    max-height: 46px;
  }

  &--left {
    @media (min-width: $breakpoint-small) {
      float: left;
      transform: translateX($global-gutter * -1)
    }

    @media (min-width: $breakpoint-medium) {
      transform: translateX($global-medium-gutter * -1)
    }
  }

  &--right {
    @media (min-width: $breakpoint-small) {
      float: right;
      transform: translateX($global-gutter * 1)
    }

    @media (min-width: $breakpoint-medium) {
      transform: translateX($global-medium-gutter * 1)
    }
  }
}
</style>
