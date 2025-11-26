import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-[1.125rem] border px-6 py-4 text-sm grid has-[>svg]:grid-cols-[3rem_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start shadow-[var(--shadow-sm)] bg-card/90 micro-interaction [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:text-[--brand-primary]',
  {
    variants: {
      variant: {
        default:
          'border-[--brand-gray] text-card-foreground before:absolute before:inset-y-3 before:left-0 before:w-1 before:rounded-full before:bg-[--brand-primary]',
        destructive:
          'border-red-200 bg-[#fff5f5] text-destructive [&>svg]:text-destructive before:absolute before:inset-y-3 before:left-0 before:w-1 before:rounded-full before:bg-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className,
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
