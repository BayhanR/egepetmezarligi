import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-[--brand-gray] dark:border-[--border] h-12 w-full min-w-0 rounded-xl border-2 bg-card px-4 py-2 text-base text-foreground shadow-[var(--shadow-sm)] transition-all duration-200 outline-none file:inline-flex file:h-9 file:border-0 file:bg-transparent file:text-sm file:font-semibold disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60',
        'focus-visible:border-[--brand-primary] focus-visible:ring-4 focus-visible:ring-ring/20',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
