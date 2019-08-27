<template lang="pug">
    div.menu-li
        div.menu-a(v-for="route in $router.options.routes")
            router-link(:to="route.path", key='data') 
                | {{ route.name }}
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

        a {
            color: $main-color-purple3;
            font-weight: 900;
            font-size: 0.9em;
        }
    }
</style>
