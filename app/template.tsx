export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-2 border-2 border-pink-500 h-[100%]">
      <div>root template</div>
      <div>{children}</div>
    </div>
  );
}
