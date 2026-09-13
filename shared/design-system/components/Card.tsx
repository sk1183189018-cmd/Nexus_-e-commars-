import React from 'react';
import { nexusColors } from '../tokens/colors';
import { nexusRadius, nexusShadow } from '../tokens/spacing';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

const paddingMap = {
  none: '0',
  sm: '12px',
  md: '20px',
  lg: '28px',
};

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'md',
  hoverable = false,
  children,
  style,
  ...rest
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const variantStyles = {
    flat: { background: nexusColors.neutral[50], border: 'none', boxShadow: 'none' },
    elevated: { background: nexusColors.neutral[0], border: 'none', boxShadow: nexusShadow.md },
    outlined: {
      background: nexusColors.neutral[0],
      border: `1px solid ${nexusColors.neutral[200]}`,
      boxShadow: 'none',
    },
  };

  return (
    <div
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      style={{
        ...variantStyles[variant],
        borderRadius: nexusRadius.lg,
        padding: paddingMap[padding],
        transform: hoverable && isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hoverable && isHovered ? nexusShadow.lg : variantStyles[variant].boxShadow,
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: hoverable ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
