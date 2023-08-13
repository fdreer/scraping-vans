import { NextFunction, Request, Response } from "express"
import { responseError } from "./errors"

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  err.statusCode = err.statusCode || 500
  err.message = err.message || "Internal Server Error"

  return responseError(err.statusCode, err.message, res)
}

export default errorHandler
