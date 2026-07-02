import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/landing/HomePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import MembersPage from "./pages/dashboard/MembersPage";
import DonationsPage from "./pages/dashboard/DonationsPage";
import EventsPage from "./pages/dashboard/EventsPage";
import EducationPage from "./pages/dashboard/EducationPage";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
          <Route path="/dashboard/members" element={<DashboardLayout><MembersPage /></DashboardLayout>} />
          <Route path="/dashboard/donations" element={<DashboardLayout><DonationsPage /></DashboardLayout>} />
          <Route path="/dashboard/events" element={<DashboardLayout><EventsPage /></DashboardLayout>} />
          <Route path="/dashboard/education" element={<DashboardLayout><EducationPage /></DashboardLayout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
