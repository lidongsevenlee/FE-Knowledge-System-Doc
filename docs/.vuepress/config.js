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
      ['/css/', 'CSS'],
      ['/javascript/', 'JavaScript'],
      ['/computer-basic/', '计算机基础'],
      ['/data-structure_algorithm/', '数据结构与算法'],
      ['/browser_nodejs/', '运行环境'],
      ['/frame_lib/', '框架与类库'],
      ['/fe-project/', '前端工程'],
      ['/business/', '项目与业务']
    ]
  },
  dest: path.resolve(__dirname, '../../dist'),
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, '../assets/images')
      }
    }
  }
}