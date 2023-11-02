import { IIncludeRoutePrefix, IRoutes } from "../interfaces/routes";

export function includeRoutePrefix({
  routes,
  prefixRoute,
}: IIncludeRoutePrefix): IRoutes[] {
  if (prefixRoute) {
    return routes.map((route) => {
      const { path } = route;

      const pathWithPrefix = `${prefixRoute}${path}`;

      return { ...route, path: pathWithPrefix };
    });
  }

  return routes;
}
