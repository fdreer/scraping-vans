import { config } from "dotenv"
import { launchChromium } from "playwright-aws-lambda"
import { checkStock, getAllSizes, getAvailableSizes } from "./vans"
import sendMessage from "./sendMessage"
import { LUZ_SIZE, URL_PAGE } from "./consts"

config()
const URL = process.env.URL || URL_PAGE

const init = async () => {
  const browser = await launchChromium({ headless: true })
  try {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(`${URL}`)

    const allSizes = await getAllSizes(page)
    const availableSizes = getAvailableSizes(allSizes)
    console.log("availableSizes: ", availableSizes)
    const luzSize = checkStock(availableSizes)
    console.log("luzSize: ", luzSize)

    if (luzSize.length > 0) {
      await sendMessage(luzSize)
      console.log("Stock disponible!!!")
    } else {
      console.log("No hay stock")
    }
  } catch (error) {
    console.log(`${error}`)
    return error
  } finally {
    await browser.close()
  }
}

// Para ejecutar el local
init()

// Para AWS Lambda
// export const handler = async (event, callback) => {
//   const message = await init()
//   return {
//     body: JSON.stringify("App is running"),
//     statusCode: 200,
//   }
// }
