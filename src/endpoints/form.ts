import * as FormActions from "../actions/form";

const prefixRoute = "/form";

const routes = [
  {
    method: "POST",
    auth: "basic",
    path: "/",
    description: "Create a new form",
    ...FormActions.downloadPdf
  },
  {
    method: "GET",
    auth: "basic",
    path: "/download-pdf",
    description: "Form download pdf",
    ...FormActions.downloadPdf
  },
];

export default {
  prefixRoute,
  routes,
};
 