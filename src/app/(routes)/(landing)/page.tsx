"use client";

import { LandingHeader } from "@/components/landing/LandingHeader";
import { TodoSection } from "@/components/landing/TodoSection";
import { DoneSection } from "@/components/landing/DoneSection";
import { useTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from "@/hooks/useTodo";
import { useToast } from "@/providers/ToastProvider";
import { useConfirm } from "@/providers/ConfirmProvider";
import Loading from "@/app/loading";

export default function Home() {
  const { data: todos = [], isLoading } = useTodos();
  const { mutate: createTodo } = useCreateTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutateAsync: deleteTodo } = useDeleteTodo();

  const { showToast } = useToast();
  const { showConfirm } = useConfirm();

  const todoItems = todos.filter((item) => !item.isCompleted);
  const doneItems = todos.filter((item) => item.isCompleted);

  const handleToggle = (id: string | number, isCompleted: boolean) => {
    updateTodo({
      itemId: id,
      payload: { isCompleted: !isCompleted },
    });
  };

  const handleAdd = (title: string) => {
    createTodo({ name: title });
  };

  const handleDelete = async (id: string | number) => {
    const confirmed = await showConfirm({
      title: "삭제 확인",
      message: "정말 삭제하시겠습니까?",
      confirmText: "삭제",
      cancelText: "취소",
    });

    if (confirmed) {
      try {
        await deleteTodo(id);
        showToast("삭제되었습니다!", "success");
      } catch {
        showToast("삭제에 실패했습니다.", "error");
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-6 md:px-6 md:py-10">
        {/* 상단 검색 및 추가 섹션 */}
        <LandingHeader onAdd={handleAdd} className="mb-8 md:mb-10" />

        {/* 메인 콘텐츠 영역 (반응형 그리드) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
          <TodoSection
            items={todoItems}
            onToggle={(id) => {
              const item = todoItems.find((i) => String(i.id) === String(id));
              if (item) handleToggle(id, item.isCompleted);
            }}
            onDelete={handleDelete}
          />
          <DoneSection
            items={doneItems}
            onToggle={(id) => {
              const item = doneItems.find((i) => String(i.id) === String(id));
              if (item) handleToggle(id, item.isCompleted);
            }}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
