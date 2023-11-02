import express from "express";
import formRoutes from "../endpoints/form";
import { includeRoutePrefix } from "./includeRoutePrefix";


const router = express.Router();

export const routes = [...includeRoutePrefix(formRoutes)];

for (const route of routes) {
  const { action, path, method, auth, middlewares = [] } = route;

  if (auth === "basic") {
    middlewares.unshift((req, res, next) => {
      console.log("Autenticação básica");
      return next();
    });
  }

  if (auth === "bearer") {
    middlewares.unshift((req, res, next) => {
      console.log("Autenticação bearer");
      return next();
    });
  }

  const methodLowerCase = method.toLowerCase() as
    | "all"
    | "get"
    | "put"
    | "delete"
    | "post"
    | "patch"
    | "options"
    | "head";

  router[methodLowerCase](path, ...middlewares, action);
}

router.get("*", (req, res, next) => {
  next({
    status: "404",
    message: "RESOURCE_NOT_FOUND",
  });
});

export default router;
