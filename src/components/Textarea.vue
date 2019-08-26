<template lang="pug">
  div.collection-input
    .collection-label(v-if='label')
      label(:for="name") {{ label }}
    textarea(:name="name", :placeholder="placeholder")
     | {{ value }}
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "Styles/setting-variable";

  .collection-input {
    padding: 20px 0;

    textarea {
        border: 1px solid $ui-gray-dark;
        border-radius: $border-global;
        height: 250px;
        width: 100%;
        padding: 20px;
        box-shadow: inset 0 0 1em transparent, 0 0 1em $ui-gray-light;

        &:focus {
          box-shadow: inset 0 0 1em transparent, 0 0 1em $ui-gray-darkness;
          transition: 0.8s;
        }

        &::placeholder {
          color: $ui-gray-dark;
        }
    }

    .collection-label {
      color: $ui-gray-darkness;
      font-weight: bold;
      padding: 10px 0;
    }
  }
</style>
