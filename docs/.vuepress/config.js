module.exports = {
  title: 'Vue bulma UI',
  description: '基于 bulma ui 的 Vue.js 组件库',
  base: '/',
  markdown: {
    config: md => {
      require('./markdown/vueCodeDemoBuilder')(md)
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: [
      {
        title: '基础元素',
        collapsable: false,
        children: [
          '/components/button',
          '/components/box'
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
