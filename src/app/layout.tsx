import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CEAC - Centro Educacional Abreu Carmo",
  description: "Escola particular em Rio das Ostras - RJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
         <div className="pt-20"> {/* Espaço para o conteúdo não ficar embaixo da navbar fixa */}
          {children}
        </div>
        <Footer />
    </body>
    </html>
  );
}