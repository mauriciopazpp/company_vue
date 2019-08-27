import axios from "axios"

export const companyList = query =>
    axios.get('https://testapi.io/api/mpaz-redstage/companies', query)
