// Nexus Design System — Typography Tokens

export const nexusTypography = {
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "'Space Grotesk', 'Inter', sans-serif", // used for headings, hero text
    mono: "'JetBrains Mono', 'Fira Code', monospace", // order IDs, tracking codes
  },

  fontSize: {
    xs:   '0.75rem',   // 12px — captions, badges
    sm:   '0.875rem',  // 14px — secondary text
    base: '1rem',      // 16px — body text
    lg:   '1.125rem',  // 18px — emphasized body
    xl:   '1.25rem',   // 20px — card titles
    '2xl': '1.5rem',   // 24px — section headings
    '3xl': '1.875rem', // 30px — page titles
    '4xl': '2.25rem',  // 36px — hero headings
    '5xl': '3rem',     // 48px — landing hero
  },

  fontWeight: {
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
    extrabold: '800',
  },

  lineHeight: {
    tight:  '1.2',
    normal: '1.5',
    relaxed: '1.7',
  },

  letterSpacing: {
    tight: '-0.02em',  // headings
    normal: '0',
    wide: '0.02em',    // uppercase labels, badges
  },
} as const;

export type NexusTypographyToken = typeof nexusTypography;
