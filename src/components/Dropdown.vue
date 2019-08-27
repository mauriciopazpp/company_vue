<template lang="pug">
    .dropdown
        a.dropdown-link
            span(v-if='label')
            | {{ label }}
            .dropdown-image(v-if='image')
            img.dropdown-image-src(:src='image')
            .dropdown-arrow
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: false
            },
            image: {
                type: String,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Styles/setting-variable";

    .dropdown a {
        display: flex;
        vertical-align: middle;
        align-items: center;
    }

    .dropdown-link {
        margin-top: $ui-corner;
    }

    .dropdown-arrow {
        background: image-set(
            '~Images/arrow-down.png' 1x,
            '~Images/arrow-down@2x.png' 2x,
            '~Images/arrow-down@3x.png' 3x) no-repeat center center;
        width: $size-global;
        height: $size-global;
        background-size: $size-global*2;
        padding: 0 $size-global;
    }

    .dropdown-image-src {
        width: $size-global * 1.7;
    }
</style>
