/**
 * 디자인 관련 상수
 * 컴포넌트에서 반복적으로 사용되는 값들을 중앙에서 관리
 */

// 레이아웃 관련 상수
export const LAYOUT = {
  /** Memo 및 ImageLoader 컴포넌트 높이 */
  COMPONENT_HEIGHT: 311,
  /** ImageLoader 너비 (desktop) */
  IMAGE_LOADER_WIDTH: 384,
  /** Memo 너비 (desktop) */
  MEMO_WIDTH: 588,
  /** CheckList 아이템 높이 */
  CHECKLIST_HEIGHT: 50,
  /** Memo 헤더 영역 높이 */
  MEMO_HEADER_HEIGHT: 48,
  /** Memo 줄 간격 */
  MEMO_LINE_HEIGHT: 32,
} as const;

// 아이콘 크기 상수
export const ICON_SIZES = {
  SM: 16,
  MD: 20,
  LG: 24,
  XL: 32,
} as const;

// 파일 업로드 제한
export const LIMITS = {
  /** 이미지 최대 크기 (bytes) - 5MB */
  MAX_IMAGE_SIZE: 5 * 1024 * 1024,
  /** 이미지 최대 크기 (MB) */
  MAX_IMAGE_SIZE_MB: 5,
} as const;

// 반응형 이미지 크기
export const RESPONSIVE_IMAGE_SIZES = {
  EMPTY_STATE: {
    LARGE: { width: 240, height: 240 },
    SMALL: { width: 120, height: 120 },
  },
  LABEL: { width: 101, height: 36 },
} as const;
