'use client';
import clsx from 'clsx';
import React, { Dispatch, SetStateAction } from 'react';
import { useController, useForm } from 'react-hook-form';
import ReactSelect, { SingleValue } from 'react-select';

export type SelectOption = { value: string; label: string };

export interface SelectProps {
  name: string;
  value: string;
  options?: SelectOption[];
  label?: string;
  size?: 'sm' | 'lg';
  placeholder?: string;
  noOptionsMessage?: string;
  disabled?: boolean;
  setState: Dispatch<SetStateAction<string>>;
}

const Dropdown: React.FC<SelectProps> = ({
  name,
  value,
  options,
  placeholder,
  label,
  size = 'lg',
  noOptionsMessage = 'Nenhum valor encontrado!',
  disabled,
  setState,
}) => {
  const { control } = useForm();
  const { field } = useController({ name, control });

  const actions = {
    onSelect: (option: SingleValue<SelectOption>) => {
      if (option) {
        setState(option.value);
      }
    },
  };

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

      <ReactSelect
        instanceId="checkin-select"
        className="w-full"
        classNames={{
          control: state =>
            clsx(
              'shadow-none transition duration-500 rounded-sm',
              'bg-opaque/10! border border-opaque/50!',
              size === 'lg' ? 'p-0.5' : 'p-0',
              state.isFocused && 'transition duration-300 border-secondary!',
            ),
          input: () => `text-sm ${value ? 'text-gray-900' : 'text-gray-500'}`,
          placeholder: () => 'text-opaque!',
          singleValue: () =>
            `text-sm ${value ? 'text-title! font-bold!' : 'text-opaque'}`,
          dropdownIndicator: state =>
            clsx(
              'transition-transform duration-200',
              state.selectProps.menuIsOpen
                ? 'rotate-180 transition-all duration-300 text-title!'
                : 'rotate-0 text-opaque!',
            ),
        }}
        styles={{
          control: base => ({
            ...base,
            boxShadow: 'none',
            borderColor: '#9ca3af',
            backgroundColor: '#0f172a',
            '&:hover': { borderColor: '#9ca3af' },
            outline: 'none',
          }),
          menu: base => ({
            ...base,
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            borderColor: '#1f2937',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
          }),
          menuList: base => ({
            ...base,
            backgroundColor: '#0f172a',
            color: '#f8fafc',
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#1f2937' : '#0f172a',
            color: '#f8fafc',
          }),
          singleValue: base => ({
            ...base,
            color: '#f8fafc',
          }),
          placeholder: base => ({
            ...base,
            color: '#9ca3af',
          }),
        }}
        ref={field.ref}
        inputId={`${name}_id`}
        options={options}
        value={
          options?.find(
            option => option.value === value || option.label === value,
          ) || null
        }
        onChange={actions.onSelect}
        onBlur={field.onBlur}
        noOptionsMessage={() => noOptionsMessage}
        placeholder={placeholder}
        isClearable={false}
        isDisabled={disabled}
      />
    </div>
  );
};

export default Dropdown;
