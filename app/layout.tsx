import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="m-0">
        <nav className="bg-slate-500 text-xl">
          <Link href="/">Home</Link>
          <a href="/buttons">Buttons</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
