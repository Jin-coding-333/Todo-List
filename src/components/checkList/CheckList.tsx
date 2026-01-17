"use client";

import { forwardRef } from "react";
import { CheckListProps } from "./CheckList.type";
import { Icons } from "@/components/icons";
import cn from "@/utils/cn";
import { variantStyles, textStyles } from "./styles";

export const CheckList = forwardRef<HTMLDivElement, CheckListProps>(
  (
    { title, isCompleted = false, variant = "default", onToggle, onClick, onDelete, className },
    ref
  ) => {
    // 체크박스 클릭 핸들러
    const handleCheckboxClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // 부모 onClick 방지
      onToggle?.();
    };

    // 삭제 버튼 클릭 핸들러
    const handleRemoveClick = (e: React.MouseEvent) => {
      e.stopPropagation(); // 부모 onClick 방지
      onDelete?.();
    };

    // 전체 컨테이너 클릭 핸들러
    const handleContainerClick = () => {
      if (variant === "detail") {
        onToggle?.();
      }
      onClick?.();
    };

    return (
      <div
        ref={ref}
        onClick={handleContainerClick}
        className={cn(
          // 기본 스타일
          "group flex cursor-pointer items-center gap-3 rounded-full transition-all duration-200",
          "border-2 border-slate-900",
          // Variant별 스타일 (default는 높이 50px 고정)
          variant === "default" ? "h-[50px] px-4" : "justify-center px-6 py-4",
          // 완료 상태에 따른 배경색
          isCompleted ? "bg-violet-100" : "bg-white",
          // 추가 클래스
          className
        )}
      >
        {/* 체크박스 아이콘 */}
        <button
          type="button"
          onClick={handleCheckboxClick}
          className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none active:scale-95"
          aria-label={isCompleted ? "완료 취소" : "완료 처리"}
        >
          <Icons name={isCompleted ? "check-in-circle" : "empty-circle"} size={32} />
        </button>

        {/* 할 일 제목 */}
        <span
          className={cn(
            "truncate text-slate-900",
            // default는 flex-1로 전체 너비, detail은 auto (가운데 정렬)
            variant === "default" && "flex-1 group-hover:underline group-hover:underline-offset-4",
            textStyles[variant],
            // 상세 페이지일 경우 언더라인 추가
            variant === "detail" && "underline underline-offset-8",
            // 완료 시 취소선
            isCompleted && "text-slate-500 line-through"
          )}
        >
          {title}
        </span>

        {/* 삭제 버튼 (onDelete가 있을 때만 표시) */}
        {onDelete && (
          <button
            type="button"
            onClick={handleRemoveClick}
            className="ml-auto flex-shrink-0 cursor-pointer text-slate-400 transition-all duration-200 hover:scale-110 hover:text-slate-600 focus:outline-none active:scale-95"
            aria-label="삭제하기"
          >
            <Icons name="X" size={24} />
          </button>
        )}
      </div>
    );
  }
);

CheckList.displayName = "CheckList";

export default CheckList;
