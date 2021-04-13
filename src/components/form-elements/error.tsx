import * as React from 'react';

type ErrorProps = { children: React.ReactNode };

function Error({ children }: ErrorProps): React.ReactElement {
  return (
    <div role="alert" className="mt-1 text-xs tracking-widest uppercase">
      {children}
    </div>
  );
}

export { Error };
