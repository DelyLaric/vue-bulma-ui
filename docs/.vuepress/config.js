module.exports = {
  title: 'Vue bulma demo',
  description: '基于Bulma.css封装的一些Vue Component Demo',
  base: '/',
  markdown: {
    config: md => {
      require('./markdown/vueCodeDemoBuilder')(md)
    }
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/icon' },
    ],
    sidebar: [
      {
        title: 'Element',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/columns'
        ]
      },
      {
        title: 'Form',
        collapsable: false,
        children: [
          '/components/form',
          '/components/checkbox'
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
