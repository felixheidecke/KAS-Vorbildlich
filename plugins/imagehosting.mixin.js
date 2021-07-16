export default {
  methods: {
    imagehosting_path (type, file) {
      if (file.split('.')[1] !== 'svg') { return `https://ssl.webpack.de/image.he-hosting.de/?rex_media_type=${type}&rex_media_file=${file}` }

      return 'https://ssl.webpack.de/image.he-hosting.de/media/' + file
    }
  }
}
