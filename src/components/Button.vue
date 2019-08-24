<template lang="pug">
  router-link.collection-button(
    v-if='link',
    :to='link',
    :title='title')
    slot
    | {{ label }}
  button.collection-button(
    v-else,
    type='button',
    v-on:click='action',
    :title='title')
    slot
    | {{ label }}
</template>

<script>
  export default {
    props: {
      action: {
        type: Function,
        required: false,
        default: () => {}
      },
      pos: {
        type: String,
        required: false,
        default: 'single'
      },
      label: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      link: {
        type: [String, Object],
        required: false
      },
      type: {
        type: String,
        required: false,
        default: 'common'
      }
    }
  }
</script>

<style lang="scss">
  .collection-button {
    display: inline-block;
    vertical-align: middle;
  }
</style>
