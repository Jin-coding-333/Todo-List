"use client";

import { ListSection } from "./ListSection";
import { TodoSectionProps } from "./landing.type";

export const TodoSection = (props: TodoSectionProps) => {
  return <ListSection type="todo" {...props} />;
};
