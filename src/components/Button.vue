<template lang="pug">
    button.collection-button(
        v-else,
        v-on:click='action')
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
        label: {
            type: String,
            required: false
        }
    }
  }
</script>

<style lang="scss" scoped>
    .collection-button {
        display: inline-block;
        vertical-align: middle;
    }
</style>
