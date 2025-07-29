import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes safely with conditional logic
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
