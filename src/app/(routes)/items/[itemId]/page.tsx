"use client";

import { useTodoDetail, useUpdateTodo, useDeleteTodo, useUploadImage } from "@/hooks/useTodo";
import { useState, useEffect } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import { ItemDetailHeader } from "@/components/items/ItemDetailHeader";
import { ItemDetailContent } from "@/components/items/ItemDetailContent";
import { ItemDetailFooter } from "@/components/items/ItemDetailFooter";
import { useToast } from "@/providers/ToastProvider";
import { useConfirm } from "@/providers/ConfirmProvider";
import Loading from "@/app/loading";

// 할 일 상세 페이지: 할 일 수정, 삭제, 이미지 업로드
export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const itemId = params.itemId as string;

  const { data: serverItem, isLoading } = useTodoDetail(itemId);
  const { mutateAsync: updateTodo } = useUpdateTodo();
  const { mutateAsync: deleteTodo } = useDeleteTodo();
  const { mutateAsync: uploadImage } = useUploadImage();

  const { showToast } = useToast();
  const { showConfirm } = useConfirm();

  // 사용자가 수정 중인 상태
  const [item, setItem] = useState({
    title: "",
    isCompleted: false,
    imageUrl: null as string | null,
    memo: "",
  });

  // 새 이미지 파일 저장용
  const [newImageFile, setNewImageFile] = useState<File | null>(null);

  // 데이터 로드 시 로컬 상태 초기화
  useEffect(() => {
    if (serverItem) {
      setItem({
        title: serverItem.name,
        isCompleted: serverItem.isCompleted,
        imageUrl: serverItem.imageUrl || null,
        memo: serverItem.memo || "",
      });
    }
  }, [serverItem]);

  // 변경 여부 확인
  const isChanged =
    serverItem &&
    (item.title !== serverItem.name ||
      item.isCompleted !== serverItem.isCompleted ||
      item.imageUrl !== (serverItem.imageUrl || null) ||
      item.memo !== (serverItem.memo || ""));

  const handleToggle = () => {
    setItem((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
  };

  const handleImageSelect = (file: File) => {
    setNewImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setItem((prev) => ({ ...prev, imageUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleImageRemove = () => {
    setNewImageFile(null);
    setItem((prev) => ({ ...prev, imageUrl: null }));
  };

  const handleMemoChange = (value: string) => {
    setItem((prev) => ({ ...prev, memo: value }));
  };

  const handleSave = async () => {
    if (!isChanged) return;

    const confirmed = await showConfirm({
      title: "저장 확인",
      message: "수정된 내용을 저장하시겠습니까?",
      confirmText: "저장",
      cancelText: "취소",
      confirmVariant: "primary", // 연두색 버튼
    });

    if (!confirmed) return;

    try {
      let finalImageUrl = item.imageUrl;

      // 새 이미지가 있으면 업로드 먼저 진행
      if (newImageFile) {
        const { url } = await uploadImage(newImageFile);
        finalImageUrl = url;
      }

      await updateTodo({
        itemId,
        payload: {
          name: item.title,
          isCompleted: item.isCompleted,
          memo: item.memo,
          imageUrl: finalImageUrl || undefined,
        },
      });

      setNewImageFile(null);
      showToast("수정 내용이 저장되었습니다!", "success");
      // 토스트가 보이도록 잠시 후 페이지 이동
      setTimeout(() => router.push("/"), 1000);
    } catch {
      showToast("저장에 실패했습니다.", "error");
    }
  };

  const handleDelete = async () => {
    const confirmed = await showConfirm({
      title: "삭제 확인",
      message: "정말 삭제하시겠습니까?",
      confirmText: "삭제",
      cancelText: "취소",
    });

    if (confirmed) {
      try {
        await deleteTodo(itemId);
        showToast("삭제되었습니다!", "success");
        // 토스트가 보이도록 잠시 후 페이지 이동
        setTimeout(() => router.push("/"), 1000);
      } catch {
        showToast("삭제에 실패했습니다.", "error");
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!serverItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[996px] px-4 py-6 md:px-6 md:py-10 lg:px-0">
        <ItemDetailHeader
          title={item.title}
          isCompleted={item.isCompleted}
          onToggle={handleToggle}
          className="mb-6"
        />

        <ItemDetailContent
          imageUrl={item.imageUrl}
          memo={item.memo}
          onImageFileSelect={handleImageSelect}
          onImageRemove={handleImageRemove}
          onMemoChange={handleMemoChange}
          className="mb-6"
        />

        <ItemDetailFooter onSave={handleSave} onDelete={handleDelete} isSaveDisabled={!isChanged} />
      </div>
    </div>
  );
}
