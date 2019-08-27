<template lang="pug">
    section.company-table
        h2 Companies
        span
            button(v-on:click='requestCompanies') Refresh
        table.company-table-table
            thead
                tr
                    th Company Name
                    th Company Spend
                    th Company Spend Abillity
                    th Additional Notes
            tbody
                tr(v-for="company in companies")
                    td {{ company.name }}
                    td {{ company.spend }}
                    td {{ company.spenAbility }}
                    td {{ company.notes }}
            
</template>

<script>
    import { companyList } from 'Store/modules/company/service'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
        ...mapGetters('company', {
            companies: 'getCompanies'
        })
        },
        mounted() {
            this.requestCompanies()
        },
        methods: {
            ...mapActions('company', [
                'requestCompanies'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import "Styles/setting-variable";

    .company-table {
        border: 1px solid $ui-gray-dark;
        padding: $size-global;
        margin: 0 $size-global;
        border-radius: $border-global;

        h2 {
            color: $main-color-purple3;
            padding: 15px 0;
        }
    }

    .company-table-table {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    .company-table-table td, .company-table-table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    .company-table-table tr:nth-child(even){background-color: #f2f2f2;}

    .company-table-table tr:hover {background-color: #ddd;}

    .company-table-table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: $main-color-purple3;
        color: white;
    }
</style>
