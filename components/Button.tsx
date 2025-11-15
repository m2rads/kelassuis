import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm',
}

const variantStyles = {
  solid: {
    slate:
      'bg-blue-900 text-white hover:bg-blue-800 hover:text-white active:bg-blue-950 active:text-white focus-visible:outline-blue-900',
    blue: 'bg-blue-900 text-white hover:text-white hover:bg-blue-800 active:bg-blue-950 active:text-white focus-visible:outline-blue-900',
    white:
      'bg-white text-blue-900 hover:bg-blue-50 active:bg-blue-100 active:text-blue-950 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-white/20 text-white hover:text-white hover:ring-white/40 active:bg-white/10 active:text-white focus-visible:outline-white focus-visible:ring-white/40',
    white:
      'ring-white text-white hover:ring-white/80 active:ring-white active:text-white/80 focus-visible:outline-white',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
