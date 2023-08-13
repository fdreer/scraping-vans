import { NextFunction, Request, Response } from "express"
import { ErrorHandler } from "../errors/errors"

const verifySecretKey = (req: Request, _res: Response, next: NextFunction) => {
  const keyRequest = req.headers["x-secret-key"]

  if (!keyRequest) {
    throw new ErrorHandler("Secret key is required", 401)
  }

  const secretKey = process.env.SECRET_ACCESS_KEY

  if (keyRequest !== secretKey) {
    throw new ErrorHandler("Invalid secret key", 401)
  }
  next()
}

export default verifySecretKey
