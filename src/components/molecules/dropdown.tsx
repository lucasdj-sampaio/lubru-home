'use client';
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
        className="w-full"
        classNames={{
          control: () =>
            `shadow-none transition duration-500 rounded-sm ${size === 'lg' ? 'p-0.5' : 'p-0'} bg-white border border-gray-300 hover:border-gray-300`,
          input: () => `text-sm ${value ? 'text-gray-900' : 'text-gray-500'}`,
          placeholder: () => 'text-gray-500',
          singleValue: () =>
            `text-sm ${value ? 'text-gray-900' : 'text-gray-500'}`,
        }}
        ref={field.ref}
        inputId={`${name}_id`}
        value={options?.find(option => option.value === value) || null}
        onChange={actions.onSelect}
        onBlur={field.onBlur}
        noOptionsMessage={() => noOptionsMessage}
        options={options}
        placeholder={placeholder}
        isClearable={false}
        isDisabled={disabled}
      />
    </div>
  );
};

export default Dropdown;
