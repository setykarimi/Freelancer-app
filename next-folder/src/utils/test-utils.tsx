import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import React from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (ui: React.ReactNode, options?: any) => {
  render(ui, { wrapper: AppProvider, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
