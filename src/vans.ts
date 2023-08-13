import { Page } from "playwright-chromium"
import { Size } from "./types"

export const getAllSizes = async (page: Page): Promise<Size[]> => {
  return page.locator(".liMedidaFamilia").evaluateAll(sizes => {
    return sizes.map(size => {
      return {
        size: size.textContent,
        available: !size.classList.contains("NoDisponible"),
      }
    })
  })
}

export const getAvailableSizes = (sizes: Size[]): Size[] => {
  return sizes.filter(s => s.available)
}

export const checkStock = (
  availableSizes: Size[],
  searchSizes: string[]
): Size[] => {
  return availableSizes.filter(availableSize => {
    return searchSizes.some(searchSize => searchSize === availableSize.size)
  })
}
