"use client";

import { ListSection } from "./ListSection";
import { DoneSectionProps } from "./landing.type";

// 완료된(DONE) 목록을 보여주는 섹션 (ListSection Wrapper)
export const DoneSection = (props: DoneSectionProps) => {
  return <ListSection type="done" {...props} />;
};
