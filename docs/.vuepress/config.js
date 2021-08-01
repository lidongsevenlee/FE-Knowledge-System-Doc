const path = require('path')
module.exports = {
  title: `SEVEN's FE-MIND`,
  description: 'FE Knowledge System',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/MiceLiD/FE-Knowledge-System' }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/html/', 'HTML'],
      ['/css/', 'CSS']
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, '../assets/images')
      }
    }
  }
}