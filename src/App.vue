<template lang="pug">
    .app
        Header
        Breadcrumbs
        .container
            .section
                Menu
            .section
                Content
        Footer
</template>

<script>
    import Header from "Components/layout/Header.vue"
    import Breadcrumbs from "Components/layout/Breadcrumbs.vue"
    import Menu from 'Components/layout/Menu.vue'
    import Content from 'Components/layout/Content.vue'
    import Footer from "Components/layout/Footer.vue"

    export default {
        components: {
            Header,
            Menu,
            Content,
            Footer,
            Breadcrumbs
        }
    }
</script>

<style lang="scss" scoped>
    @import "Styles/setting-variable";

    .container {
        display: grid;
        grid-template-columns: 20% 80%;
        padding: ($ui-corner*13) ($ui-corner*33);
    }
</style>
