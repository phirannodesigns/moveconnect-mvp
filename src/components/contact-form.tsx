import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from './form-elements/input';
import { NetlifyForm } from './form-elements/netlify-form';
import { Select } from './form-elements/select';

type FormData = {
  first_name: string;
  last_name: string;
  email_address: string;
  contact_number: string;
  moving_from: string;
  moving_to: string;
  how_did_you_hear: string;
};

function ContactForm(): React.ReactElement {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onSubmit', reValidateMode: 'onChange' });
  return (
    <NetlifyForm
      action="/?action=success"
      handleSubmit={handleSubmit}
      className="grid w-full max-w-2xl grid-cols-1 mx-auto gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <Input
        label="First name"
        autoComplete="given-name"
        {...register('first_name', { required: true })}
        errors={errors}
      />
      <Input
        label="Last name"
        autoComplete="family-name"
        {...register('last_name', { required: true })}
        errors={errors}
      />
      <Input
        label="Email"
        type="email"
        {...register('email_address', { required: true })}
        errors={errors}
      />
      <Input
        label="Phone"
        type="tel"
        autoComplete="tel"
        {...register('contact_number', { required: true })}
        errors={errors}
      />
      <Input
        label="Moving from (postcode)"
        {...register('moving_from', { required: true })}
        errors={errors}
      />
      <Input
        label="Moving to (postcode)"
        {...register('moving_to', { required: true })}
        errors={errors}
      />
      <div className="sm:col-span-2">
        <Select
          label="How did you hear about us?"
          {...register('how_did_you_hear', { required: true })}
          errors={errors}
        >
          {[
            {
              value: '',
              label: '',
            },
            {
              value: 'facebook',
              label: 'Facebook',
            },
            {
              value: 'google',
              label: 'Google',
            },
            {
              value: 'word_of_mouth',
              label: 'Word of mouth',
            },
            {
              value: 'friend',
              label: 'Friend',
            },
            {
              value: 'mailouts',
              label: 'Mailouts',
            },
            {
              value: 'other',
              label: 'Other',
            },
          ].map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg sm:w-auto"
        >
          Quote my move
        </button>
      </div>
    </NetlifyForm>
  );
}

export { ContactForm };
