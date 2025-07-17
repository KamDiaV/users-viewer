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
          exit={{ opacity: 1 }}
          initial={false}
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
