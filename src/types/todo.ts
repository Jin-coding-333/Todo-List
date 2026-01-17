export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  imageUrl?: string | null;
  memo?: string | null;
  tenantId?: string;
}

export interface CreateTodoRequest {
  name: string;
}

export interface UpdateTodoRequest {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
}

export interface ImageUploadResponse {
  url: string;
}
