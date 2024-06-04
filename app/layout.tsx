import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import { Toaster } from "sonner";

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
      <body className={`${font.className} [&::-webkit-scrollbar]:hidden`}>
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
