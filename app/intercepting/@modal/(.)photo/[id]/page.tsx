import { use } from "react";
import { photos } from "../../../data";
import Image from "next/image";

export default function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const photo = photos.find((p) => p.id === id);
  return (
    <div className="flex h-60 justify-center items-center bg-slate-300 w-full rounded-md">
      <Image
        width={200}
        height={200}
        className="w-52"
        src={photo!.src}
        alt="222"
      />
    </div>
  );
}
