import http from "http"

export const companyList = query =>
    http.get('/api/company', query)
