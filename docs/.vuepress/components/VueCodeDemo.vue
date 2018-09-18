<template>
  <div class="box demo-container">
    <div v-if="$slots.summary" class="code-summary">
      <slot name="summary" />
    </div>

    <div
      v-if="$slots.summary"
      class="code-block-divider"
    ></div>

    <div class="code-demo">
      <component :is="component" />
    </div>

    <div class="code-container">
      <transition>
        <pre
          v-show="isShowCode"
          v-highlightjs="sourceCode"
        ><code class="javascript"></code></pre>
      </transition>

      <div class="code-block-divider"></div>

      <div
        class="code-toggle-button"
        @click="isShowCode = !isShowCode">
        <span v-show="isShowCode">⬆</span>
        <span v-show="!isShowCode">⬇</span>
      </div>
    </div>
  </div>
</template>

<script>
let { parseComponent, compile } = require('vue-template-compiler')

export default {
  name: 'VueCodeDemo',

  props: {
    code: String
  },

  data() {
    return {
      component: {},
      sourceCode: '',
      isShowCode: false
    };
  },

  methods: {
    buildCodeToComponent (code) {
      const component = {}

      const SFC = parseComponent(this.sourceCode)

      if (SFC.template) {
        component.template = SFC.template.content
      } else {
        component.template = `<div style="width: 100%; height: 100%">${this.sourceCode}</div>`
      }

      if (SFC.script) {
        Object.assign(component, eval(
          SFC.script.content.replace('export default', 'component =')
        ))
      }

      return component
    }
  },

  watch: {
    code: {
      immediate: true,

      handler (code) {
        this.sourceCode = unescape(code).trim()
        this.component = this.buildCodeToComponent(this.sourceCode)
      }
    }
  }
}
</script>

<style scoped>
.demo-container {
  padding: 0;
  margin-top: 20px;
}

.code-demo,
.code-summary {
  display: flex;
  padding: 1.5rem;
}

.code-container {
  overflow: auto
}

.code-container pre:not(:last-child) {
  margin-bottom: 0
}

.code-toggle-button {
  height: 2rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.code-toggle-button:hover {
  background-color: #f1f1f1;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.code-block-divider {
  height: 1px;
  background-color: gainsboro;
}
</style>
