"use client";

import { ListSection } from "./ListSection";
import { TodoSectionProps } from "./landing.type";

// 할 일(TO DO) 목록을 보여주는 섹션 (ListSection Wrapper)
export const TodoSection = (props: TodoSectionProps) => {
  return <ListSection type="todo" {...props} />;
};
