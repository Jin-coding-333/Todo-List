/**
 * Memo 컴포넌트 Props
 */
export interface MemoProps {
  /** 메모 내용 */
  value?: string;
  /** 내용 변경 핸들러 */
  onChange?: (value: string) => void;
  /** placeholder 텍스트 */
  placeholder?: string;
  /** 추가 클래스 */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
}
