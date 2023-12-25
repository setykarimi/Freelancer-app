import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./common/layout";
import AuthPage from "./pages/auth";
import CompleteProfile from "./pages/complete-profile";
import Owner from "./pages/dashboard/owner";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route element={<Layout />}>
          <Route path="/owner" element={<Owner />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
