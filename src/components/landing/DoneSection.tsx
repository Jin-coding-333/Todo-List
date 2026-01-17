"use client";

import { ListSection } from "./ListSection";
import { DoneSectionProps } from "./landing.type";

export const DoneSection = (props: DoneSectionProps) => {
  return <ListSection type="done" {...props} />;
};
