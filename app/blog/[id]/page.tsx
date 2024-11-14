import { use } from "react";

export default function Id({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <div>current id is: {id}</div>;
}
