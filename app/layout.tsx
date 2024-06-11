import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import { Toaster } from "sonner";
import "animate.css";

const font = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plataforma de Eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} scrollbar-webkit scrollbar-thumb`}>
        <AuthProvider>
          {children}
          <Toaster
            theme="dark"
            richColors
            expand={false}
            visibleToasts={3}
            position={"top-center"}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
