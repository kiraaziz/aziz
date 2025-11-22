import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const useHalfText = (value: any, size: number = 20) => {
  if (value.length > size) {
    return value.slice(0, size) + '...'
  }
  return value
}
