import { config } from "dotenv"
import { chromium } from "playwright-chromium"
import { URL_PAGE } from "../consts"
import { checkStock, getAllSizes, getAvailableSizes } from "../utils/vans"
import { ErrorHandler } from "../errors/errors"
import sendMessage from "./sendMessage"

config()
const URL = process.env.URL || URL_PAGE

const getVans = async () => {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto(`${URL}`)

  const allSizes = await getAllSizes(page)
  const availableSizes = getAvailableSizes(allSizes)
  const luzSize = checkStock(availableSizes)
  await browser.close()

  if (luzSize.length <= 0) {
    throw new ErrorHandler("No stock vans", 404)
  }

  await sendMessage(luzSize)
  console.log("Stock disponible!!!", luzSize)
  return luzSize
}

export default getVans
