import { Skeleton } from "@/components/ui/skeleton";

export default function UserLoading() {
  return (
    <main className="mx-auto max-w-xl space-y-4 p-6">
      <Skeleton className="h-8 w-1/3" />     
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />  
      ))}
    </main>
  );
}