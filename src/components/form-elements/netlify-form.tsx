/* eslint-disable no-console, sonarjs/no-identical-functions */
import { navigate } from 'gatsby';
import * as React from 'react';
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

function encode(data: Record<string, string | number | boolean>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

async function postToNetlify(form, data, setIsLoading, setError) {
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...data,
    }),
  })
    .then((response) => {
      console.log({ netlify: response });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (response.ok) {
        return response;
      }
      setIsLoading(false);
      return response;
    })
    .catch((error) => {
      setError(String(error));
      console.error(error);
    });
}

async function postToMoveconnect(data, setIsLoading, setError) {
  return fetch('/.netlify/functions/moveconnect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log({ moveconnect: response });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (response.ok) {
        return response;
      }
      setIsLoading(false);
      return response;
    })
    .catch((error) => {
      setError(String(error));
      console.error(error);
    });
}

interface INetlifyForm {
  action?: string;
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: <TSubmitFieldValues extends FieldValues = Record<string, any>>(
    onValid: SubmitHandler<TSubmitFieldValues>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onInvalid?: SubmitErrorHandler<Record<string, any>>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  error: string;
  name?: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function NetlifyForm(
  {
    action = '/success/',
    children,
    className,
    handleSubmit,
    error,
    name = 'contact_form',
    setIsLoading,
    setError,
  }: INetlifyForm,
  rest: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLFormElement> &
    React.FormHTMLAttributes<HTMLFormElement>
): React.ReactElement {
  const onSubmit = handleSubmit(async (data, event) => {
    event?.preventDefault();
    const form = event?.target;

    setIsLoading(true);

    await postToNetlify(form, data, setIsLoading, setError).catch((error_) => {
      setError(String(error_));
      console.error(error_);
    });

    await postToMoveconnect(data, setIsLoading, setError).catch((error_) => {
      setError(String(error_));
      console.error(error_);
    });

    if (!error) {
      setIsLoading(false);
      await navigate(form.getAttribute('action'));
    }
  });
  return (
    <form
      name={name}
      action={action}
      method="POST"
      data-netlify
      onSubmit={onSubmit}
      className={className}
      {...rest}
    >
      {children}
    </form>
  );
}

export { NetlifyForm };
