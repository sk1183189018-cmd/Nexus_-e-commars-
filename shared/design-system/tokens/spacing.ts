// Nexus Design System — Spacing, Radius & Shadow Tokens

export const nexusSpacing = {
  0: '0px',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

export const nexusRadius = {
  none: '0px',
  sm:   '0.375rem', // 6px — inputs, small buttons
  md:   '0.5rem',   // 8px — cards, buttons
  lg:   '0.75rem',  // 12px — modals, larger cards
  xl:   '1rem',     // 16px — hero sections, feature cards
  full: '9999px',   // pills, avatars, badges
} as const;

export const nexusShadow = {
  sm:  '0 1px 2px rgba(24, 24, 27, 0.05)',
  md:  '0 4px 12px rgba(24, 24, 27, 0.08)',
  lg:  '0 8px 24px rgba(24, 24, 27, 0.12)',
  xl:  '0 16px 40px rgba(24, 24, 27, 0.16)',
  // Nexus signature glow — used on primary buttons, active AI features
  brandGlow: '0 8px 24px rgba(99, 102, 241, 0.35)',
} as const;

export const nexusMotion = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
  },
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce:   'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;
