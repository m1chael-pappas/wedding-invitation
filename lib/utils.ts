import {
  type ClassValue,
  clsx,
} from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getFontClass = (language: string, baseFont: string = "") => {
  const koreanFont = language === "ko" ? "font-yeon-sung" : "";
  return `${baseFont} ${koreanFont}`.trim();
};

export const getTextFont = (language: string) => {
  return language === "ko" ? "font-yeon-sung" : "font-lustria";
};

export const getHeadingFont = (language: string) => {
  return language === "ko" ? "font-yeon-sung" : "font-lustria";
};
