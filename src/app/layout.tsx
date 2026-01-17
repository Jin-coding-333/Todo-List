import type { Metadata } from "next";
import "./globals.css";
import GNB from "@/components/gnb/GNB";
import QueryProvider from "@/providers/QueryProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { ConfirmProvider } from "@/providers/ConfirmProvider";

export const metadata: Metadata = {
  title: "Todo List",
  description: "할 일 목록을 관리하는 To Do 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <QueryProvider>
          <ToastProvider>
            <ConfirmProvider>
              <GNB />
              <main className="pt-[60px]">{children}</main>
            </ConfirmProvider>
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
