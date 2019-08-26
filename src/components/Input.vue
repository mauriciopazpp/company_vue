<template lang="pug">
  div.collection-input
    .collection-label(v-if='label')
      label(:for="name") {{ label }}
    input(:name="name", :type="type", :placeholder="placeholder")
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: false,
        default: 'text'
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

    input {
        border: 1px solid $ui-gray-dark;
        border-radius: $border-global;
        height: 45px;
        width: 400px;
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
