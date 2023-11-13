import { Request, Response, NextFunction } from "express";

export const healthCheck = async (_req: Request, res: Response, next: NextFunction) => {
  console.log("Health check");
  res.sendStatus(200);
};
