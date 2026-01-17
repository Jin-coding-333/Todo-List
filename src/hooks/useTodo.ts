import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoApi } from "@/api/todo";
import { CreateTodoRequest, UpdateTodoRequest } from "@/api/todo/types";

// React Query 키 팩토리: 쿼리 키를 중앙에서 관리하여 오타 방지 및 갱신 용이성 확보
export const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const, // 전체 목록 키
  detail: (id: string | number) => [...todoKeys.all, "detail", id] as const, // 상세 아이템 키
};

// 할 일 목록 조회 훅
export const useTodos = () => {
  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: todoApi.getItems,
  });
};

// 할 일 상세 조회 훅
export const useTodoDetail = (itemId: string | number) => {
  return useQuery({
    queryKey: todoKeys.detail(itemId),
    queryFn: () => todoApi.getItemDetail(itemId),
    enabled: !!itemId,
  });
};

// 할 일 생성 훅
export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateTodoRequest) => todoApi.createItem(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
  });
};

// 할 일 수정 훅
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ itemId, payload }: { itemId: string | number; payload: UpdateTodoRequest }) =>
      todoApi.updateItem(itemId, payload),
    onSuccess: (_, { itemId }) => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
      queryClient.invalidateQueries({ queryKey: todoKeys.detail(itemId) });
    },
  });
};

// 할 일 삭제 훅
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (itemId: string | number) => todoApi.deleteItem(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
  });
};

// 이미지 업로드 훅
export const useUploadImage = () => {
  return useMutation({
    mutationFn: (file: File) => todoApi.uploadImage(file),
  });
};
