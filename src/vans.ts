import { Page } from "playwright-chromium"
import { Size } from "./types"
import { LUZ_SIZE } from "./consts"

export const getAllSizes = async (page: Page): Promise<Size[]> => {
  return page.locator(".liMedidaFamilia").evaluateAll(sizes => {
    return sizes.map(size => {
      return {
        size: size.textContent?.trim() as string,
        available: !size.classList.contains("NoDisponible"),
      }
    })
  })
}

export const getAvailableSizes = (sizes: Size[]): Size[] => {
  return sizes.filter(s => s.available)
}

export const checkStock = (availableSizes: Size[]): Size[] => {
  return availableSizes.filter(availableSize => {
    return LUZ_SIZE.includes(`${availableSize.size}`)
  })
}
