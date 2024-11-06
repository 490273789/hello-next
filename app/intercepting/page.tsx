import Link from "next/link";
import { photos } from "./data";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-row flex-wrap">
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/intercepting/photo/${id}`}>
          <Image width="200" height="200" src={src} className="m-1" alt="111" />
        </Link>
      ))}
    </main>
  );
}
