import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("mx-auto w-full max-h-screen px-2 md:px-20", className)}
    >
      {children}
    </div>
  );
}
