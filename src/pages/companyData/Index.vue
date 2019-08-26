<template lang="pug">
    section.company-data
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, 
        | lectus in pulvinar consectetur.
        .company-form
            Input(name='name', label='COMPANY NAME', placeholder='e.g. Your Company Name')
            Input(name='spend', label='COMPANY SPEND', placeholder='e.g. $150,00')
            Input(name='spend_ability', label='COMPANY SPEND ABILITY', placeholder='e.g. $150,00 - $330,00')
            .company-notes(v-on:click='() => toggleModal()', title='Click to insert a note')
                Textarea(name='notes', label='NOTES', placeholder='e.g. Good Tech Company')
            Modal.company-modal(v-if='showModal', close='showModal = false')
                .company-header(slot='header') ADDITIONAL NOTES
                .company-body(slot='body')
                    Textarea(name='notes', label='NOTES', placeholder='e.g. Good Tech Company')
                .company-footer(slot='footer')
                    Button.company-footer-button(label='Close', :action='() => toggleModal()')

</template>

<script>
    import Input from 'Components/Input.vue'
    import Textarea from 'Components/Textarea.vue'
    import Modal from 'Components/Modal.vue'
    import Button from 'Components/Button.vue'

    export default {
        data: () => ({
            showModal: false
        }),
        components: {
            Input,
            Textarea,
            Modal,
            Button
        },
        methods: {
            toggleModal() {
                this.showModal = !this.showModal
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Styles/setting-variable";

    .company-data {
        border: 1px solid $ui-gray-dark;
        padding: $size-global;
        margin: 0 $size-global;
        border-radius: $border-global;

        .company-form > .company-notes {
            cursor: pointer;
        }
    }

    .company-footer {
        display: flex;
        flex-direction: row-reverse;
    }

    .company-footer-button {
        background: $main-color-purple3;
        height: $size-global*2;
        color: $ui-gray-lighter;
        border-radius: $border-global/2;
        padding: 0 ($size-global*1.8);
        white-space: pre;

        &:hover {
            background: $main-color-purple2;
            transition: 0.4s;
        }
    }
</style>