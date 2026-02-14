import type { CSSProperties } from 'react'

/**
 * Shared design tokens for the app. Centralizes colors and spacing
 * so styles stay consistent and easy to change.
 */
export const theme = {
  color: {
    primary: '#2563eb',
    study: '#dc2626',
    quiz: '#16a34a',
    neutral: '#64748b',
    textMuted: '#64748b',
  },
  radius: 8,
  linkPadding: '0.75rem 1.25rem',
  linkBlockPadding: '1rem 1.5rem',
  buttonPadding: '0.75rem 1.5rem',
} as const

const baseLinkStyle: CSSProperties = {
  display: 'inline-block',
  padding: theme.linkPadding,
  color: 'white',
  textDecoration: 'none',
  borderRadius: theme.radius,
  fontWeight: 600,
}

const blockLinkStyle: CSSProperties = {
  ...baseLinkStyle,
  display: 'block',
  width: '100%',
  maxWidth: 320,
  padding: theme.linkBlockPadding,
}

/** Shared style for inline text links (e.g. Back to Home). */
export function getLinkStyle(background: string): CSSProperties {
  return { ...baseLinkStyle, background }
}

/** Shared style for full-width nav links (e.g. Study Mode, category list). */
export function getBlockLinkStyle(background: string): CSSProperties {
  return { ...blockLinkStyle, background }
}

/** Shared style for action buttons (Right, Wrong, Next card). */
export function getButtonStyle(background: string): CSSProperties {
  return {
    padding: theme.buttonPadding,
    background,
    color: 'white',
    border: 'none',
    borderRadius: theme.radius,
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '1rem',
  }
}
