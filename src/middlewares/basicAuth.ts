import { Request, Response, NextFunction } from "express";

export function basicAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader: string = req.headers.authorization || "";

    const parts = authHeader.split(" ");

    if (parts.length !== 2) throw new Error("Token error");

    const [scheme, token] = parts;

    if (!/Basic/i.test(scheme)) throw new Error("Token bad formatted");

    if (token !== process.env.basicToken)
      throw new Error("Credentials not valid");

    return next();
  } catch (err: any) {
    return res.status(401).send(err.message || "Token invalid");
  }
}
