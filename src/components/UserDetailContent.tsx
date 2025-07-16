"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";

interface UserDetailContentProps {
  user: User;
}

export default function UserDetailContent({ user }: UserDetailContentProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-screen-xl space-y-4"
    >
      <h1 className="text-2xl font-bold">{user.name}</h1>

      <div className="space-y-1 text-sm">
        <p>
          <span className="font-medium">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">Address:</span>{" "}
          {`${user.address.street}, ${user.address.city}`}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-medium">Website:</span> {user.website}
        </p>
        <p>
          <span className="font-medium">Company:</span> {user.company.name}
        </p>
      </div>

      <Button asChild>
        <Link
          href="/"
          className="inline-block rounded-md bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700"
        >
          ← Назад
        </Link>
      </Button>
    </motion.main>
  );
}
