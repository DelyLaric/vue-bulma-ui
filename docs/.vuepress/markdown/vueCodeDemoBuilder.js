// inspried by https://github.com/chenz24/vue-blu/build
// thanks you very very very much @chenz24!

module.exports = md => {
  md.use(require('markdown-it-anchor'), {
    level: 2,
    permalink: true,
    permalinkBefore: true
  }).use(require('markdown-it-container'), 'vue-demo', {
    render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          let code = tokens.find(token => token.tag === 'code').content
          let summarys = tokens.filter(
            token => token.content.includes('summary>')
          ).map(token => token.content.replace('<summary>', '<summary slot="summary">'))

          source = `\n<VueCodeDemo\n`
          source += `  code="${escape(code)}"`
          source += '>\n'
          summarys.forEach(summary => source += `${summary}\n`)

          return source
      } else {
        return '</VueCodeDemo>'
      }
    }
  });
}
