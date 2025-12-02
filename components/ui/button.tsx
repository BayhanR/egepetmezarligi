import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background micro-interaction",
  {
    variants: {
      variant: {
        default:
          'bg-[--brand-primary] text-[--brand-white] shadow-[var(--shadow-sm)] hover:bg-[--brand-primary-hover] hover:shadow-[var(--shadow-md)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-[#c62832]',
        outline:
          'border-2 border-[--brand-gray] bg-background/80 text-foreground shadow-[var(--shadow-sm)] hover:border-[--brand-primary] hover:text-[--brand-primary] hover:bg-white',
        secondary:
          'bg-secondary text-secondary-foreground shadow-[var(--shadow-sm)] hover:bg-[#f0c6cb]',
        ghost:
          'text-foreground hover:text-[--brand-primary] hover:bg-[rgba(249,54,68,0.08)]',
        link: 'text-[--brand-primary] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2.5 has-[>svg]:px-5',
        sm: 'h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3.5 text-sm',
        lg: 'h-12 rounded-2xl px-8 has-[>svg]:px-6 text-lg',
        icon: 'size-11 rounded-2xl',
        'icon-sm': 'size-9 rounded-xl',
        'icon-lg': 'size-12 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
