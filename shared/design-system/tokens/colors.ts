// Nexus Design System — Color Tokens
// Base identity: Blue → Purple → Cyan gradient system

export const nexusColors = {
  // Primary brand gradient family
  primary: {
    50:  '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1', // core Nexus blue-violet
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },

  // Secondary — purple accent
  accent: {
    50:  '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7', // core Nexus purple
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },

  // Tertiary — cyan highlight (used for AI/smart features, live status)
  cyan: {
    50:  '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4', // core Nexus cyan
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },

  // Neutral / grayscale (UI backgrounds, text, borders)
  neutral: {
    0:   '#ffffff',
    50:  '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },

  // Semantic colors (status, feedback)
  semantic: {
    success:      '#16a34a',
    successBg:    '#f0fdf4',
    warning:      '#d97706',
    warningBg:    '#fffbeb',
    error:        '#dc2626',
    errorBg:      '#fef2f2',
    info:         '#0284c7',
    infoBg:       '#f0f9ff',
  },

  // Gradients (used for hero banners, premium badges, AI features)
  gradients: {
    brandPrimary:   'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    brandCyan:      'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
    heroBackground: 'linear-gradient(180deg, #4f46e5 0%, #9333ea 50%, #06b6d4 100%)',
  },
} as const;

export type NexusColorToken = typeof nexusColors;
