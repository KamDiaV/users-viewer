import "./globals.css";
import { Inter } from "next/font/google";
import { PageTransitionWrapper } from "@/components/PageTransitionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Users Viewer",
  description: "Приложение для просмотра пользователей",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
