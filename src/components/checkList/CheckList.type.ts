/**
 * CheckList variant 타입
 * - default: 홈 화면 목록용 (좌측 정렬, 작은 크기)
 * - detail: 상세 페이지 상단용 (가운데 정렬, 전체 너비)
 */
export type CheckListVariant = "default" | "detail";

/**
 * CheckList 컴포넌트 Props
 */
export interface CheckListProps {
  /** 할 일 제목 */
  title: string;
  /** 완료 여부 */
  isCompleted?: boolean;
  /** 표시 variant */
  variant?: CheckListVariant;
  /** 체크박스 토글 핸들러 */
  onToggle?: () => void;
  /** 아이템 클릭 핸들러 (상세 페이지 이동 등) */
  onClick?: () => void;
  /** 추가 클래스 */
  className?: string;
}
