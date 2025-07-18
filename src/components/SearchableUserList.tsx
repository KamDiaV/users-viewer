"use client";

import { useState, useMemo, useRef, useEffect, ChangeEvent } from "react";
import { useDebounce } from "../lib/useDebounce";
import { motion } from "framer-motion";
import { User } from "@/types/user";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface SearchableUserListProps {
  users: User[];
}

export default function SearchableUserList({ users }: SearchableUserListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery, 300);
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   inputRef.current?.blur();
  // }, []);

  const filteredUsers = useMemo<User[]>(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (q.length < 3) return users;
    return users.filter((u) => u.name.toLowerCase().includes(q));
  }, [users, debouncedQuery]);

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
          <Link
            key={user.id}
            href={`/user/${user.id}`}
            className="group block hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm flex-grow">
                <p>
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-medium">Компания:</span> {user.company.name}
                </p>
                
              </CardContent>
              <CardFooter>
                <p className="text-black text-sm dark:text-white group-hover:underline">
                  Подробнее →
                </p>
              </CardFooter>
            </Card>
          </Link>
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