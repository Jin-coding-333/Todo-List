import { axiosInstance } from "./axiosInstance";
import { TodoItem, CreateTodoRequest, UpdateTodoRequest, ImageUploadResponse } from "@/types/todo";

export const todoApi = {
  // 할 일 목록 조회
  getItems: async () => {
    const { data } = await axiosInstance.get<TodoItem[]>("/items");
    return data;
  },

  // 할 일 생성
  createItem: async (payload: CreateTodoRequest) => {
    const { data } = await axiosInstance.post<TodoItem>("/items", payload);
    return data;
  },

  // 할 일 상세 조회
  getItemDetail: async (itemId: string | number) => {
    const { data } = await axiosInstance.get<TodoItem>(`/items/${itemId}`);
    return data;
  },

  // 할 일 수정
  updateItem: async (itemId: string | number, payload: UpdateTodoRequest) => {
    const { data } = await axiosInstance.patch<TodoItem>(`/items/${itemId}`, payload);
    return data;
  },

  // 할 일 삭제
  deleteItem: async (itemId: string | number) => {
    const { data } = await axiosInstance.delete<{ message: string }>(`/items/${itemId}`);
    return data;
  },

  // 이미지 업로드
  uploadImage: async (imageFile: File) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const { data } = await axiosInstance.post<ImageUploadResponse>("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
};
