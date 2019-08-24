<template lang="pug">
    div.menu-li
        router-link.menu-a(to='/')
            div COMPANY DATA
        router-link.menu-a(to='/')
            div COMPANY TABLE
        router-link.menu-a(to='/')
            div COMPANY PAGE
</template>

<script>
    /** */
</script>

<style lang="scss" scoped>
    @import "Styles/setting-variable";

    .menu-a {
        display: block;
        padding: $size-global;
        border-left: 1px solid $ui-gray-dark;
        border-right: 1px solid $ui-gray-dark;

        &:first-child {
            border: 1px solid $ui-gray-dark;
            border-radius: $border-global $border-global 0 0;
        }

        &:last-child {
            border: 1px solid $ui-gray-dark;
            border-radius: 0 0 $border-global $border-global;
        }
    }
</style>
