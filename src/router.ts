import express from "express"
import catchAsyncErrors from "./errors/catchAsyncErrors"
import { vansController } from "./controller/vansController"
import errorHandler from "./errors/errorHandler"
import verifySecretKey from "./middleware/verifyToken"

const router = express.Router()

router.get("/", verifySecretKey, catchAsyncErrors(vansController))

router.use(errorHandler)

export default router
