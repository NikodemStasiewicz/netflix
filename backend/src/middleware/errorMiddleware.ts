import { NextFunction, Request, Response } from "express";
import { authenticate } from "./authMiddleware";

const errorHandler =(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    console.log(err.stack)

    if(err instanceof AuthenticationError){
        res.status(401).json({message: "Unauthorized: " + err.message})
    }else {
        res.status(500).json({message:"Internal server error"})
    }
};

class AuthenticationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "AuthenticationError";
    }
  }
  
  export { errorHandler, AuthenticationError };