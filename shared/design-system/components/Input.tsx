import React from 'react';
import { nexusColors } from '../tokens/colors';
import { nexusRadius } from '../tokens/spacing';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  icon,
  fullWidth = true,
  style,
  ...rest
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <label
          style={{
            display: 'block',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: nexusColors.neutral[700],
            marginBottom: '6px',
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: 'relative' }}>
        {icon && (
          <span
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: nexusColors.neutral[400],
              display: 'flex',
            }}
          >
            {icon}
          </span>
        )}

        <input
          onFocus={(e) => {
            setIsFocused(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            rest.onBlur?.(e);
          }}
          style={{
            width: '100%',
            height: '42px',
            padding: icon ? '10px 14px 10px 38px' : '10px 14px',
            fontSize: '0.875rem',
            color: nexusColors.neutral[900],
            background: nexusColors.neutral[0],
            border: `1.5px solid ${
              error
                ? nexusColors.semantic.error
                : isFocused
                ? nexusColors.primary[500]
                : nexusColors.neutral[300]
            }`,
            borderRadius: nexusRadius.md,
            outline: 'none',
            boxShadow: isFocused
              ? `0 0 0 3px ${nexusColors.primary[100]}`
              : 'none',
            transition: 'all 150ms ease',
            ...style,
          }}
          {...rest}
        />
      </div>

      {error && (
        <p
          style={{
            fontSize: '0.75rem',
            color: nexusColors.semantic.error,
            marginTop: '4px',
          }}
        >
          {error}
        </p>
      )}
      {!error && helperText && (
        <p
          style={{
            fontSize: '0.75rem',
            color: nexusColors.neutral[500],
            marginTop: '4px',
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
