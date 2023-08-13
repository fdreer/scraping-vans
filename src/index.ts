import { config } from "dotenv"
import express from "express"
import cors from "cors"
import router from "./router"
import { PATH } from "./consts"

config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use(PATH, router)

app.listen(PORT, () => {
  console.log("Server is running in PORT: " + PORT)
})
