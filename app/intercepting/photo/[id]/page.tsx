import { use } from "react";
import { photos } from "../../data";
import Image from "next/image";

export default function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const photo = photos.find((p) => p.id === id);
  return (
    <Image
      width={200}
      height={200}
      className="block w-1/4 mx-auto mt-10"
      src={photo!.src}
      alt=""
    />
  );
}
