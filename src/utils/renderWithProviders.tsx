import { PropsWithChildren, ReactElement } from 'react';
import { ReactQueryProvider } from '../providers/QueryClient';
import { render } from '@testing-library/react';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui, {
    wrapper: ({ children }: PropsWithChildren): ReactElement => (
      <ReactQueryProvider>{children}</ReactQueryProvider>
    ),
  });
};

export default renderWithProviders;
