import React from 'react';
import { nexusColors } from '../tokens/colors';
import { nexusRadius, nexusShadow, nexusMotion } from '../tokens/spacing';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: nexusColors.gradients.brandPrimary,
    color: nexusColors.neutral[0],
    border: 'none',
    boxShadow: nexusShadow.brandGlow,
  },
  secondary: {
    background: nexusColors.primary[50],
    color: nexusColors.primary[700],
    border: `1px solid ${nexusColors.primary[200]}`,
  },
  outline: {
    background: 'transparent',
    color: nexusColors.neutral[800],
    border: `1px solid ${nexusColors.neutral[300]}`,
  },
  ghost: {
    background: 'transparent',
    color: nexusColors.neutral[700],
    border: 'none',
  },
  danger: {
    background: nexusColors.semantic.error,
    color: nexusColors.neutral[0],
    border: 'none',
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '6px 14px', fontSize: '0.8125rem', height: '32px' },
  md: { padding: '10px 20px', fontSize: '0.875rem', height: '40px' },
  lg: { padding: '13px 28px', fontSize: '1rem', height: '48px' },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  disabled,
  children,
  style,
  ...rest
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        borderRadius: nexusRadius.md,
        fontWeight: 600,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: fullWidth ? '100%' : 'auto',
        transform: isHovered && !disabled && !loading ? 'translateY(-1px)' : 'translateY(0)',
        transition: `all ${nexusMotion.duration.fast} ${nexusMotion.easing.standard}`,
        ...style,
      }}
      {...rest}
    >
      {loading ? (
        <span
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'nexus-spin 0.6s linear infinite',
          }}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
      <style>{`
        @keyframes nexus-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};

export default Button;
