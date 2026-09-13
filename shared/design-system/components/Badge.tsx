import React from 'react';
import { nexusColors } from '../tokens/colors';
import { nexusRadius } from '../tokens/spacing';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'ai';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const badgeStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  primary: { bg: nexusColors.primary[50], color: nexusColors.primary[700] },
  success: { bg: nexusColors.semantic.successBg, color: nexusColors.semantic.success },
  warning: { bg: nexusColors.semantic.warningBg, color: nexusColors.semantic.warning },
  error:   { bg: nexusColors.semantic.errorBg, color: nexusColors.semantic.error },
  info:    { bg: nexusColors.semantic.infoBg, color: nexusColors.semantic.info },
  neutral: { bg: nexusColors.neutral[100], color: nexusColors.neutral[600] },
  // Special badge for AI-powered features (smart search, recommendations)
  ai: { bg: nexusColors.gradients.brandCyan, color: nexusColors.neutral[0] },
};

export const Badge: React.FC<BadgeProps> = ({ variant = 'neutral', children, icon }) => {
  const { bg, color } = badgeStyles[variant];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        background: bg,
        color,
        fontSize: '0.75rem',
        fontWeight: 600,
        padding: '4px 10px',
        borderRadius: nexusRadius.full,
        lineHeight: 1.4,
      }}
    >
      {icon}
      {children}
    </span>
  );
};

export default Badge;
