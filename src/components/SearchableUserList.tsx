"use client";

import { useState, useMemo, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { User } from "@/types/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface SearchableUserListProps {
  users: User[];
}

export function SearchableUserList({ users }: SearchableUserListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredUsers = useMemo<User[]>(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return users.filter((user) =>
      user.name.toLowerCase().includes(normalizedQuery)
    );
  }, [users, searchQuery]);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mx-auto p-6">
      <Input
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
        {filteredUsers.map((userItem) => (
          <Card
            key={userItem.id}
            className="hover:shadow-lg transition-shadow"
          >
            <Link href={`/user/${userItem.id}`} className="block">
              <CardHeader>
                <CardTitle>{userItem.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <p>
                  <span className="font-medium">Email:</span> {userItem.email}
                </p>
                <p>
                  <span className="font-medium">Компания:</span>{" "}
                  {userItem.company.name}
                </p>
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
    </div>
  );
}
