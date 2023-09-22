import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError() {
        console.log('Something went wrong!');
      },
    },
    mutations: {
      onError() {
        console.log('Something went wrong!');
      },
    },
  },
});

export const ReactQueryProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
