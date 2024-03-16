import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-full", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      buy: "transform bg-green-500 px-6 font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-green-700",
      cancel:
        "transform bg-red-500 px-6 font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-700",
    },
    size: {
      sm: "px-2 py-1",
      md: "px-4 py-2",
      lg: "px-6 py-3",
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
});
