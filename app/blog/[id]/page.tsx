export default function Id({ params }: { params: { id: string } }) {
  return <div>current id is: {params.id}</div>;
}
