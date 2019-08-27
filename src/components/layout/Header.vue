<template lang="pug">
    header
        .header-logo
        input.header-search(placeholder='Search Companies')
        .header-or OR
        Button.header-button-new(label='NEW SMARTLIST')
        .header-list
            .header-item-left 
                Dropdown.header-item(label='PROSPECT')
                Dropdown.header-item(label='ALERT')
                Dropdown.header-item(label='LEARN')
            .header-item-right
                a.header-chrome
                Dropdown.header-item(:image='image')
</template>

<script>
    import Button from 'Components/Button.vue'
    import Dropdown from 'Components/Dropdown.vue'
    import image from 'Images/group.png'

    export default {
        data: () => ({
            image
        }),
        components: { 
            Button,
            Dropdown
        }
    }
</script>

<style lang="scss" scoped>
    @import "Styles/setting-variable";

    header {
        align-items: center;
        display: flex;
        background: $main-color-purple;
        padding: $size-global $size-global*2;
        color: $ui-gray-lighter;

        .header-logo {
            background: image-set(
                '~Images/logo-pink.png' 1x,
                '~Images/logo-pink@2x.png' 2x,
                '~Images/logo-pink@3x.png' 3x) no-repeat center center;
            width: $size-global*4;
            height: $size-global*2;
        }

        .header-search {
            background: $main-color-purple2;
            margin: $ui-corner;
            width: $ui-space-x*30;
            border-radius: $ui-corner/2;
            margin-left: $ui-corner*6;
            height: $ui-space-y*3;
            color: $ui-gray-lighter;
            padding: $ui-corner*6;

            &::placeholder {
                background: image-set(
                    '~Images/search.png' 1x,
                    '~Images/search@2x.png' 2x,
                    '~Images/search@3x.png' 3x) no-repeat left center;
                color: $ui-gray-lighter;
                padding: $ui-corner*10;
                align-items: center;
            }
        }

        .header-or {
            padding: $size-global;
        }

        .header-button-new {
            background: $main-color-purple3;
            height: $ui-space-y*3;
            color: $ui-gray-lighter;
            border-radius: $border-global/2;
            padding: 0 ($ui-corner*8);
            white-space: pre;

            &:hover {
                background: $main-color-purple2;
                transition: 0.4s;
            }
        }

        .header-list {
            display: flex;
            width: 100%;
            align-items: center;

            .header-item-left {
                display: flex;

                .header-item {
                    padding: 0 ($ui-corner*6);
                    align-items: center;
                }
            }

            .header-item-right {
                display: flex;
                margin-left: auto;
                align-items: center;

                .header-chrome {
                    background: image-set(
                        '~Images/default.png' 1x,
                        '~Images/default@2x.png' 2x,
                        '~Images/default@3x.png' 3x) no-repeat left center;
    
                    padding: $ui-corner*8;
                }
            }
        }
    }
</style>
