import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS 클래스를 병합하는 유틸리티 함수
 *
 * clsx로 조건부 클래스를 결합하고, tailwind-merge로 충돌을 해결
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default cn;
