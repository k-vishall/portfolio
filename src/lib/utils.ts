import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateYearsSince(startDate: string) {
  const start = new Date(startDate)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  const m = now.getMonth() - start.getMonth()
  const d = now.getDate() - start.getDate()
  if (m < 0 || (m === 0 && d < 0)) years -= 1
  return Math.max(0, years)
}