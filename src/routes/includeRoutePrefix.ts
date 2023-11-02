import { IIncludeRoutePrefix } from "../interfaces/routes";

export function includeRoutePrefix({
  routes,
  prefixRoute,
}: IIncludeRoutePrefix) {
  if (prefixRoute) {
    return routes.map((route) => {
      const { path } = route;

      const pathWithPrefix = `${prefixRoute}${path}`;

      return { ...route, paht: pathWithPrefix };
    });
  }

  return routes;
}
