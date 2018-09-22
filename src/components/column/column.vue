<template>
  <div :class="klass" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    size: String,

    width: String,

    offset: String,

    narrow: Boolean,

    customSize: String
  },

  computed: {
    klass () {
      return [
        'column',
        this.narrow && 'is-narrow',
        this.size && this.size,
        this.offset && 'is-offset-' + this.offset,
      ]
    },

    style () {
      const style = {}
      const { width } = this

      width && (style.width = width)
      
      return style
    }
  }
}
</script>
