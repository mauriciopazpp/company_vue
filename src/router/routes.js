import CompanyPage from "Pages/companyPage/Index.vue"
import CompanyData from "Pages/companyData/Index.vue"
import CompanyTable from "Pages/companyTable/Index.vue"

export default [
    {
      path: "/",
      name: "COMPANY DATA",
      component: CompanyData
    },
    {
      path: "/company-table",
      name: "COMPANY TABLE",
      component: CompanyTable
    },
    {
      path: "/company-page",
      name: "COMPANY PAGE",
      component: CompanyPage
    }
  ]
