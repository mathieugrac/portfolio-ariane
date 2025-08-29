import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-white p-8 rounded-3xl shadow-[0_4px_14px_rgba(102,88,61,0.08)]",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />;
}

function CardName({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-[#444444] font-semibold mb-2", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-[#444444] text-sm leading-relaxed", className)}
      {...props}
    />
  );
}

export { Card, CardContent, CardName, CardDescription };
