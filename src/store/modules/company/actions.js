import { companyList } from './service'

export const requestCompanies = ({ commit }, limit) =>
    companyList(limit)
        .then(({ data: companies }) => {
            commit('setCompanies', companies)
        })
