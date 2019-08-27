<template lang="pug">
  .modal
    .modal-mask
        .modal-wrapper
            .modal-container
                .modal-header
                    slot(name='header')
                .modal-body
                    slot(name='body')
                .modal-footer
                    slot(name='footer')
                        button.modal-default-button(v-on:click='$emit("close")')

</template>

<script>

</script>

<style lang="scss" scoped>
  @import "Styles/setting-variable";

    .modal-mask {
        position: fixed;
        z-index: $z-index-level2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: $ui-space-x*35;
        margin: 0 auto;
        padding: ($ui-corner*6) ($ui-corner*8);
        background-color: #fff;
        border-radius: $ui-corner;
        box-shadow: 0 $ui-corner ($ui-corner*3) rgba(0, 0, 0, .33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: ($ui-corner*6) 0;
    }

    .modal-default-button {
        float: right;
    }
    
    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
