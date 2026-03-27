'use client';
import clsx from 'clsx';
import React, { Dispatch, SetStateAction } from 'react';

export interface InputProps {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  size?: 'sm' | 'lg';
  disabled?: boolean;
  setState: Dispatch<SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  label,
  placeholder,
  size = 'lg',
  disabled,
  setState,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={`${name}_id`}
          className={`text-sm ${value ? 'text-title' : 'text-opaque'}`}
        >
          {label}
        </label>
      )}

      <input
        id={`${name}_id`}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={event => setState(event.target.value)}
        className={clsx(
          'w-full rounded-sm border bg-opaque/10 text-sm transition duration-300 outline-none',
          'border-opaque/50 focus:border-secondary focus:ring-0 focus:outline-none',
          size === 'lg' ? 'p-3' : 'p-2',
          value ? 'text-title' : 'text-opaque',
          disabled ? 'cursor-not-allowed opacity-70' : 'cursor-text',
        )}
      />
    </div>
  );
};

export default Input;
