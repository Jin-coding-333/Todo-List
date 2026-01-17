"use client";

import { forwardRef } from "react";
import { SearchProps } from "./Search.type";
import cn from "@/utils/cn";

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ value, onChange, placeholder = "할 일을 입력해주세요", className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          // 기본 스타일
          "h-14 w-full px-6",
          "rounded-full bg-white",
          "border-2 border-slate-900",
          // 네오브루탈리즘 그림자
          "shadow-[4px_4px_0_0_#0f172a]",
          // 텍스트 스타일
          "text-base font-bold text-slate-900",
          "placeholder:font-normal placeholder:text-slate-400",
          // 포커스 스타일
          "focus:border-[3px] focus:border-violet-600 focus:outline-none",
          // 텍스트 오버플로우 처리
          "overflow-hidden text-ellipsis",
          // 트랜지션
          "transition-colors duration-200",
          // 추가 클래스
          className
        )}
        {...props}
      />
    );
  }
);

Search.displayName = "Search";

export default Search;
