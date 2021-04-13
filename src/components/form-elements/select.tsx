import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

import { Error } from './error';

type SelectProps = {
  children: React.ReactNode;
  errors: DeepMap<Record<string, unknown>, FieldError>;
  label: string;
  name: string;
  required?: boolean;
} & (
  | { description: string; descriptionId: string }
  | { description?: never; descriptionId?: never }
);

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      description,
      descriptionId,
      errors,
      label,
      name,
      required,
      ...rest
    },
    ref
  ) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <div className="flex justify-between">
          <label htmlFor={name} className="block text-sm font-medium">
            {label}
          </label>
          {description ? (
            <span id={descriptionId} className="text-sm text-gray-500">
              {description}
            </span>
          ) : null}
        </div>
        <div className="mt-1">
          <select
            ref={ref}
            id={name}
            name={name}
            defaultValue=""
            required={required}
            aria-describedby={description ? descriptionId : undefined}
            className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:ring-blue-600"
            {...rest}
          >
            {children}
          </select>
        </div>
        {hasErrors ? <Error>{label} is a required field</Error> : null}
      </div>
    );
  }
);

type OptionProps = {
  value: string;
  children: React.ReactNode;
};

function Option({ value, children }: OptionProps): React.ReactElement {
  return <option value={value}>{children}</option>;
}

export { Option, Select };
