import Layout from "@common/layout";
import { DarkModeProvider } from "@context/dark-mode";
import AuthPage from "@pages/auth";
import CompleteProfile from "@pages/complete-profile";
import Owner from "@pages/dashboard/owner";
import Project from "@pages/project";
import Projects from "@pages/projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Owner />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
