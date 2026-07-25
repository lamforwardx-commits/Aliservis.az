import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
  children: ReactNode;
};

export function GlassCard({ children, className, ...props }: Props) {
  return (
    <div className={cn("glass rounded-3xl p-6 md:p-8", className)} {...props}>
      {children}
    </div>
  );
}
