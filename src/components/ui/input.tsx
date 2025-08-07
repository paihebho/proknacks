import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground selection:bg-primary selection:text-primary-foreground",
        "flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs",
        "transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0",
        "file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        // Light mode styles
        "border-white placeholder:text-black/80 bg-amber-50/10",
        "focus-visible:border-amber-300 focus-visible:ring-amber-200/50 focus-visible:ring-[3px]",

        // Dark mode styles
        "dark:border-gray-600 dark:placeholder:text-gray-500 dark:bg-input/30",
        "dark:focus-visible:border-amber-400 dark:focus-visible:ring-amber-400/50",

        // Invalid state
        "aria-invalid:border-red-400 aria-invalid:ring-red-200/50",
        "dark:aria-invalid:border-red-500 dark:aria-invalid:ring-red-500/50",

        className
      )}
      {...props}
    />
  );
}

export { Input };
