"use client";

import { useState, useMemo, useRef, useEffect, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { User } from "@/types/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface SearchableUserListProps {
  users: User[];
}

export default function SearchableUserList({ users }: SearchableUserListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.blur();
  }, []);

  const filteredUsers = useMemo<User[]>(() => {
    const q = searchQuery.trim().toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(q));
  }, [users, searchQuery]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Input
        ref={inputRef}  
        placeholder="Введите имя пользователя для поиска..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="mb-6 max-w-md"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredUsers.map((user) => (
          <Card key={user.id} className="hover:shadow-lg transition-shadow">
            <Link href={`/user/${user.id}`} className="block">
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <p><span className="font-medium">Email:</span> {user.email}</p>
                <p><span className="font-medium">Компания:</span> {user.company.name}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
        {filteredUsers.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">
            По запросу «{searchQuery}» ничего не найдено.
          </p>
        )}
      </motion.div>
    </>
  );
}
