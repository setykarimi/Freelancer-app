import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <div className="container">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
