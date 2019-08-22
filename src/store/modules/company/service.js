import http from "http"

export const companyList = query =>
    http.get('https://companies.free.beeceptor.com/companies', query)
