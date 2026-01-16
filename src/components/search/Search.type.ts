/**
 * Search 컴포넌트 Props 타입
 */
export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 입력 값 */
  value?: string;
  /** 값 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** placeholder 텍스트 */
  placeholder?: string;
  /** 추가 클래스 */
  className?: string;
}
