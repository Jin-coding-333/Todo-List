import { TodoItem } from "@/api/todo/types";

export interface SectionBaseProps {
  items?: TodoItem[];
  onToggle?: (id: string | number) => void;
  onDelete?: (id: string | number) => void;
  className?: string;
}

export interface ListSectionProps extends SectionBaseProps {
  type: "todo" | "done";
}

// 하위 호환성을 위해 유지
export type TodoSectionProps = SectionBaseProps;
export type DoneSectionProps = SectionBaseProps;

export interface LandingHeaderProps {
  onAdd?: (title: string) => void;
  className?: string;
}
