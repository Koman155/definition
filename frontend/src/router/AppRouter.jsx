import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Story from '../pages/Story'
import ClientLogin from '../pages/Login/ClientLogin'
import StaffLogin from '../pages/Login/StaffLogin'
import AdminLogin from '../pages/Login/AdminLogin'
import ClientRegister from '../pages/Register/ClientRegister'
import StaffRegister from '../pages/Register/StaffRegister'
import AdminRegister from '../pages/Register/AdminRegister'
import AdminDashboard from '../pages/Dashboard/AdminDashboard'
import ManagerDashboard from '../pages/Dashboard/ManagerDashboard'
import DriverDashboard from '../pages/Dashboard/DriverDashboard'
import PilotDashboard from '../pages/Dashboard/PilotDashboard'
import CaptainDashboard from '../pages/Dashboard/CaptainDashboard'
import EmployeeDashboard from '../pages/Dashboard/EmployeeDashboard'
import ClientDashboard from '../pages/Dashboard/ClientDashboard'
import Tracking from '../pages/Tracking'
import Payments from '../pages/Payments'
import Ratings from '../pages/Ratings'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/login/client" element={<ClientLogin />} />
      <Route path="/login/staff" element={<StaffLogin />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/register/client" element={<ClientRegister />} />
      <Route path="/register/staff" element={<StaffRegister />} />
      <Route path="/register/admin" element={<AdminRegister />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/dashboard/manager" element={<ManagerDashboard />} />
      <Route path="/dashboard/driver" element={<DriverDashboard />} />
      <Route path="/dashboard/pilot" element={<PilotDashboard />} />
      <Route path="/dashboard/captain" element={<CaptainDashboard />} />
      <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
      <Route path="/dashboard/client" element={<ClientDashboard />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter


