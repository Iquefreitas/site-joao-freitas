// app/layout.tsx
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Header } from "./_component/header";
import { Footer } from "./_component/footer"; // Importando o Footer

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: "Joao Freitas",
  description: "Página de Perfil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={epilogue.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
