import { photos } from "../../data";
import Image from "next/image";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
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
