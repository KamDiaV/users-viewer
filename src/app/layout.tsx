import "../styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
    <html lang="ru" className="bg-white dark:bg-zinc-900">
      <body
        className={`${inter.className} flex min-h-screen flex-col`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1 pt-6">
          <div className="mx-auto max-w-screen-xl px-6">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
