import type { ReactNode } from 'react'

/**
 * Wraps page content in a consistent main container (padding and max width).
 * Used by all top-level pages for uniform layout.
 */
type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main style={{ padding: '2rem', margin: '0 auto' }}>
      {children}
    </main>
  )
}
