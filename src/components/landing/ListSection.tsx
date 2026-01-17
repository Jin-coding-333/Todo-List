"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckList } from "@/components/checkList";
import cn from "@/utils/cn";
import { ListSectionProps } from "./landing.type";

import { SECTION_CONFIG } from "@/constants/landing";

export const ListSection = ({
  type,
  items = [],
  onToggle,
  onDelete,
  className,
}: ListSectionProps) => {
  const router = useRouter();
  const isEmpty = items.length === 0;
  const config = SECTION_CONFIG[type];

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* 라벨 이미지 */}
      <div className="w-fit">
        <Image src={config.labelImage} alt={config.labelAlt} width={101} height={36} priority />
      </div>

      <div className="flex flex-col gap-4">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            {/* 큰 화면용 이미지 */}
            <div className="hidden md:block">
              <Image
                src={config.emptyImageLarge}
                alt={config.emptyImageAlt}
                width={240}
                height={240}
              />
            </div>
            {/* 작은 화면용 이미지 */}
            <div className="block md:hidden">
              <Image
                src={config.emptyImageSmall}
                alt={config.emptyImageAlt}
                width={120}
                height={120}
              />
            </div>
            <p className="mt-4 font-bold text-slate-400">{config.emptyMessage}</p>
          </div>
        ) : (
          items.map((item) => (
            <CheckList
              key={item.id}
              title={item.name}
              isCompleted={item.isCompleted}
              onToggle={() => onToggle?.(item.id)}
              onClick={() => router.push(`/items/${item.id}`)}
              onDelete={() => onDelete?.(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};
