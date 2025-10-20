import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader === null || authHeader === undefined) {
    return res.status(401).json({ status: 401, message: "UnAuthorized" });
  }
  const token = authHeader.split(" ")[1];
  const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
    }


  //   * Verify the JWT token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res.status(401).json({ status: 401, message: "UnAuthorized" });
    req.user = user as AuthUser;
    next();
  });
};

export default authMiddleware;