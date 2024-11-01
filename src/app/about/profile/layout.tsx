export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>title</h1>
      <div>{children}</div>
    </>
  );
}
