/**
 * ImageLoader 컴포넌트 Props
 */
export interface ImageLoaderProps {
  /** 이미지 URL (있으면 이미지 표시, 없으면 placeholder) */
  src?: string | null;
  /** 이미지 alt 텍스트 */
  alt?: string;
  /** 파일 선택 핸들러 */
  onFileSelect?: (file: File) => void;
  /** 이미지 삭제 핸들러 */
  onRemove?: () => void;
  /** 추가 클래스 */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
}
