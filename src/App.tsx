import { DarkModeProvider } from "@context/dark-mode";
import FreelancerLayout from "@features/freelancer/layout";
import OwnerLayout from "@features/owner/layout";
import AuthPage from "@pages/auth";
import CompleteProfile from "@pages/complete-profile";
import Owner from "@pages/dashboard/owner";
import FreelancerDashboard from "@pages/freelancer/dashboard";
import SubmittedProjects from "@pages/freelancer/projects";
import FreelancerProposals from "@pages/freelancer/proposals";
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
          <Route path="/freelancer" element={<FreelancerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<FreelancerProposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route path="/owner" element={<OwnerLayout />}>
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
