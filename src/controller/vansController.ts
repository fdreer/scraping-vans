import { NextFunction, Request, Response } from "express"
import getVans from "../service/vansService"

export const vansController = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<Response> => {
  const vans = await getVans()
  return res.status(200).json(vans)
}
