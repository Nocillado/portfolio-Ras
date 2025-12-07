import { useState } from "react";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
}

function ImageWithSkeleton({
  className,
  skeletonClassName,
  alt,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Skeleton className={cn("absolute inset-0", skeletonClassName)} />
      )}
      <img
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        {...props}
      />
    </>
  );
}

export { ImageWithSkeleton };
