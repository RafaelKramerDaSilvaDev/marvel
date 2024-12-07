import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { GlobalStyles } from "./styles/global-styles";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
