import { Skeleton } from "@/components/ui/skeleton";

export default function UserLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-1/3" />
      {Array.from({ length: 6 }).map((_, idx) => (
        <Skeleton key={idx} className="h-4 w-full" />
      ))}
    </div>
  );
}
