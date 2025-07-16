"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          // не скрываем старый контент
          exit={{ opacity: 1 }}
          // не делаем initial анимацию при первом рендере
          initial={false}
          // делаем плавный вход нового
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ position: "absolute", width: "100%", top: 0, left: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
