import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
