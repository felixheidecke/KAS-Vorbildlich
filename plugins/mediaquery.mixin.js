export default {
  data () {
    return {
      mediaquery: {
        s: false,
        m: false,
        l: false,
        xl: false
      }
    }
  },

  mounted () {
    window.matchMedia('(min-width: 640px)').addEventListener('change', (e) => { this.mediaquery.s = !!e.matches })
    window.matchMedia('(min-width: 960px)').addEventListener('change', (e) => { this.mediaquery.m = !!e.matches })
    window.matchMedia('(min-width: 1200px)').addEventListener('change', (e) => { this.mediaquery.l = !!e.matches })
    window.matchMedia('(min-width: 1600px)').addEventListener('change', (e) => { this.mediaquery.xl = !!e.matches })

    if (window.innerWidth >= 1600) {
      this.mediaquery.xl = this.mediaquery.l = this.mediaquery.m = this.mediaquery.s = true
      return
    }

    if (window.innerWidth >= 1200) {
      this.mediaquery.xl = false
      this.mediaquery.l = this.mediaquery.m = this.mediaquery.s = true
      return
    }

    if (window.innerWidth >= 960) {
      this.mediaquery.xl = this.mediaquery.l = false
      this.mediaquery.m = this.mediaquery.s = true
      return
    }

    if (window.innerWidth >= 640) {
      this.mediaquery.xl = this.mediaquery.l = this.mediaquery.m = false
      this.mediaquery.s = true
      return
    }

    this.mediaquery.xl = this.mediaquery.l = this.mediaquery.m = this.mediaquery.s = false
  }
}
