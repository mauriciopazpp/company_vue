<template lang="pug">
    .app
        Header
        .container
            .section
                Menu
            .section
                Content
        Footer
</template>

<script>
    import Header from "Components/layout/Header.vue"
    import Menu from 'Components/layout/Menu.vue'
    import Content from 'Components/layout/Content.vue'
    import Footer from "Components/layout/Footer.vue"

    export default {
        components: {
            Header,
            Menu,
            Content,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    @import "Styles/setting-variable";

    .container {
        display: grid;
        grid-template-columns: 20% 80%;
        padding: ($size-global*2) ($size-global*5);
    }
</style>
