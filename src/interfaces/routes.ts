import { Request, Response, NextFunction } from "express";


export interface IIncludeRoutePrefix {
  routes: IRoutes[];
  prefixRoute: string;
}

export interface IRoutes {
  method: string;
  auth?: string;
  path: string;
  description: string;
  middlewares?: { (req: Request, res: Response, next: NextFunction): void }[];
  action: (req: Request, res: Response, next: NextFunction) => void;
}
