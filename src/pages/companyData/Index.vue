<template lang="pug">
    section.company-data
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, 
        | lectus in pulvinar consectetur.
        p(v-if="errors.length")
            ul
                li.company-messages(v-for="error in errors") {{ error }}
        .company-form
            .company-form-label
                label COMPANY NAME
            input.company-form-input(ref='name', name='name', placeholder='e.g. Your Company Name', v-on:blur='checkName')
            .company-form-label
                label COMPANY SPEND
            input.company-form-input(ref='spend', name='spend', placeholder='e.g. $150,00', v-on:blur='checkSpend')
            .company-form-label
                label COMPANY SPEND ABILITY
            input.company-form-input(ref='spendAbility', name='spendAbility', placeholder='e.g. $150,00 - $330,00', v-on:blur='checkSpendAbility')
            .company-notes(v-on:click='() => toggleModal()', title='Click to insert a note')
                .company-notes-label
                    label Notes
                textarea(ref='notes', name='notes', label='NOTES', placeholder='e.g. Good Tech Company', v-model="notes")
            Modal.company-modal(v-if='showModal', close='.')
                .company-header(slot='header') ADDITIONAL NOTES
                .company-body(slot='body')
                    textarea(ref='notes1',  name='notesModal', placeholder='e.g. Good Tech Company',  v-model="notes")
                .company-footer(slot='footer')
                    Button.company-footer-button(label='Close', :action='() => toggleModal()')
</template>

<script>
    import Modal from 'Components/Modal.vue'
    import Button from 'Components/Button.vue'

    export default {
        data: () => ({
            errors: [],
            showModal: false,
            notes: '',
            spendAbilityRegex: /((\d+\.?)+[-]+(\d+\.?))$$/
        }),
        components: {
            Modal,
            Button
        },
        methods: {
            checkName: function () {
                this.errors = []
                
                if (!this.$refs.name.value) {
                    this.errors.push('Name can not be null.')
                }
            },
            checkSpend: function () {
                this.errors = []

                if (isNaN(this.$refs.spend.value) || parseInt(this.$refs.spend.value) < 0) {
                    this.errors.push('Spend field must be a positive number')
                    this.$refs.spend.value = ''
                }
            },
            checkSpendAbility: function () {
                this.errors = []

                if (!this.spendAbilityRegex.test(this.$refs.spendAbility.value)) {
                    this.errors.push('Please, enter valid value e.g. $100-$200')
                    this.$refs.spendAbility.value = ''
                }

                const values = this.$refs.spendAbility.value.split('-')
                if (values[0] > values[1]) {
                    this.errors.push('The first value needs to be bigger then the second value!')
                    this.$refs.spendAbility.value = ''
                }
            },
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

        .company-form {
            padding: 20px 0;

            .company-form-label {
                color: $ui-gray-darkness;
                font-weight: bold;
                padding: 10px 0;
            }

            .company-form-input {
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
            
            .company-notes {
                cursor: pointer;

                .company-notes-label {
                    color: $ui-gray-darkness;
                    font-weight: bold;
                    padding: 10px 0;
                }
            }
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

    .company-messages {
        padding: 20px;
        background: $ui-danger;
        color: white;
    }

    textarea {
        border: 1px solid $ui-gray-dark;
        border-radius: $border-global;
        height: 250px;
        width: 100%;
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
</style>