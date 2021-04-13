import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

import { Error } from './error';

type InputProps = {
  autoComplete?: string;
  errors: DeepMap<Record<string, unknown>, FieldError>;
  label: string;
  name: string;
  required?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel';
} & (
  | { description: string; descriptionId: string }
  | { description?: never; descriptionId?: never }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete,
      description,
      descriptionId,
      errors,
      label,
      name,
      required,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <div className="flex flex-wrap items-start justify-between">
          <label htmlFor={name} className="block text-sm font-medium">
            {label}
          </label>
          {description ? (
            <span id={descriptionId} className="text-sm text-gray-500">
              {description}
            </span>
          ) : null}
          <div className="w-full mt-1">
            <input
              ref={ref}
              id={name}
              name={name}
              required={required}
              type={type}
              autoComplete={autoComplete}
              className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:ring-blue-600"
              aria-describedby={description ? descriptionId : undefined}
              {...rest}
            />
          </div>
          {hasErrors ? <Error>{label} is a required field</Error> : null}
        </div>
      </div>
    );
  }
);

export { Input };
