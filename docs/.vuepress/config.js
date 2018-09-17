module.exports = {
  title: 'Vue bulma UI',
  description: '基于 bulma ui 的 Vue。 组件库',
  base: '/', // 设置站点根路径
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
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
  }
}
