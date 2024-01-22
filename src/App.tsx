import ProtectedRoute from "@common/protected-route";
import { DarkModeProvider } from "@context/dark-mode";
import AdminLayout from "@features/admin/layout";
import FreelancerLayout from "@features/freelancer/layout";
import OwnerLayout from "@features/owner/layout";
import AdminDashboardPage from "@pages/admin/dashboard";
import AdminUsers from "@pages/admin/users";
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
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<FreelancerProposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Owner />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals
            " element={<FreelancerProposals />} />
          </Route>
          <Route path="*" element={<h1>صفحه‌ای که دنبالش هستید یافت نشد</h1>} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
