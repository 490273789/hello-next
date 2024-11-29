export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 border-pink-500 h-[100%]">
      <div className="p-2 bg-pink rounded-sm ">root template</div>
      <div className="p-2">{children}</div>
    </div>
  );
}
