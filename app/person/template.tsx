export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-1 rounded-md overflow-hidden">{children}</div>;
}
