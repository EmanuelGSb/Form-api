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
    path: "/dowload-pdf",
    description: "Form dowload pdf",
    ...FormActions.downloadPdf
  },
];

export default {
  prefixRoute,
  routes,
};
 