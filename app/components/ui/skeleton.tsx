import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-skeleton", className)} // Use bg-skeleton
      {...props}
    />
  );
}

export default Skeleton;

export { Skeleton }
