<template lang="pug">
    .app
        Header
        Menu
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
    /*style app*/
</style>
