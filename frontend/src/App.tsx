import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog"
import StudentLogin from "./pages/StudentLogin";
import BiometricVerification from "./pages/BiometricVerification";
import StudentDashboard from "./pages/StudentDashboard";
import ElectionDetails from "@/pages/ElectionDetails";
import Profile from "@/pages/Profile";
import Elections from "@/pages/Elections";
import PastElections from "@/pages/PastElections";
import Documentation from "@/pages/Documentation";
import NotFound from "./pages/NotFound";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/Dashboard";
import Candidates from "@/pages/admin/Candidates";
import AddCandidate from "@/pages/admin/AddCandidate";
import ElectionMonitoring from "@/pages/admin/ElectionMonitoring";
import ResultChecker from "@/pages/admin/ResultChecker";
import AuditLogs from "@/pages/admin/AuditLogs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<StudentLogin />} />
          <Route path="/biometric-verification" element={<BiometricVerification />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/elections/:id" element={<ElectionDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/past-elections" element={<PastElections />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/candidates" element={<Candidates />} />
          <Route path="/admin/candidates/add" element={<AddCandidate />} />
          <Route path="/admin/monitoring" element={<ElectionMonitoring />} />
          <Route path="/admin/results" element={<ResultChecker />} />
          <Route path="/admin/audit-logs" element={<AuditLogs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

