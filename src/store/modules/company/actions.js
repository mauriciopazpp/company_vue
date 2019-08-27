import { companyList } from './service'

export const requestCompanies = ({ commit }) =>
    companyList()
        .then(({ data: companies }) => {
            console.log('companies')
            commit('setCompanies', companies)
        })
