import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-sm shadow-lg shadow-black/10",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-destructive to-black text-destructive-foreground border border-white/10 rounded-xl backdrop-blur-[10px] shadow-md shadow-black/20 ring-1 ring-white/10 hover:from-destructive/90",
        destructive:
          "bg-destructive/70 border border-destructive/30 text-destructive-foreground hover:bg-destructive/80",
        outline:
          "border border-destructive/30 bg-transparent hover:bg-accent/50 hover:text-accent-foreground",
        secondary:
          "bg-secondary/70 border border-destructive/30 text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "border border-transparent hover:bg-accent/50 hover:text-accent-foreground hover:border-destructive/30",
        link: "text-primary underline-offset-4 hover:underline shadow-none backdrop-blur-none border-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }