import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 font-mono text-sm text-white/80 hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  )
}
