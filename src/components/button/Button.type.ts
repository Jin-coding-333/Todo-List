import { IconName } from "@/components/icons";

/**
 * 버튼 variant 타입
 * - default: 흰색 배경 + 테두리
 * - danger: 빨간색 배경
 * - primary: 연두색 배경
 * - violet: 보라색 배경
 * - navy: 짙은 남색 배경
 * - fab-light: FAB용 밝은 회색 (그림자 없음)
 * - fab-dark: FAB용 어두운 색 (그림자 없음)
 * - box-light: Box용 밝은 회색 (그림자 있음)
 */
export type ButtonVariant =
  | "default"
  | "danger"
  | "primary"
  | "violet"
  | "navy"
  | "fab-light"
  | "fab-dark"
  | "box-light";

/**
 * 버튼 형태 타입
 * - default: 일반 버튼 (rounded-full)
 * - fab: 플로팅 액션 버튼 (원형, 아이콘만)
 * - box: 둥근 사각형 버튼 (Search 옆 추가하기 버튼)
 */
export type ButtonShape = "default" | "fab" | "box";

/**
 * 버튼 크기 타입
 * - sm: 162px × 56px
 * - lg: 168px × 56px
 */
export type ButtonSize = "sm" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 스타일 variant */
  variant?: ButtonVariant;
  /** 버튼 형태 */
  shape?: ButtonShape;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 아이콘 이름 */
  icon?: IconName;
  /** 아이콘만 표시 (children 무시) */
  iconOnly?: boolean;
  /** 자식 요소 */
  children?: React.ReactNode;
}
