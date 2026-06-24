import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import LandingPage from './pages/public/LandingPage'
import LoginPage from './pages/public/LoginPage'
import UserDashboard from './pages/user/UserDashboard'
import LocationSearch from './pages/user/LocationSearch'
import SelectOnMap from './pages/user/SelectOnMap'
import RideSelection from './pages/user/RideSelection'
import DriverSearching from './pages/user/DriverSearching'
import DriverAssigned from './pages/user/DriverAssigned'
import RideTracking from './pages/user/RideTracking'
import RideComplete from './pages/user/RideComplete'
import WalletPage from './pages/user/WalletPage'
import BookingHistory from './pages/user/BookingHistory'
import UserProfile from './pages/user/UserProfile'
import HelpCenter from './pages/user/HelpCenter'
import DriverLogin from './pages/driver/DriverLogin'
import DriverRegistration from './pages/driver/DriverRegistration'
import DriverVerificationStatus from './pages/driver/DriverVerificationStatus'
import DriverDashboard from './pages/driver/DriverDashboard'
import DriverRideRequest from './pages/driver/DriverRideRequest'
import DriverActiveRide from './pages/driver/DriverActiveRide'
import DriverEarnings from './pages/driver/DriverEarnings'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserManagement from './pages/admin/UserManagement'
import DriverManagement from './pages/admin/DriverManagement'
import DriverVerificationCenter from './pages/admin/DriverVerificationCenter'
import RideMonitoring from './pages/admin/RideMonitoring'
import PaymentMonitoring from './pages/admin/PaymentMonitoring'
import AdminSettings from './pages/admin/AdminSettings'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/location-search" element={<LocationSearch />} />
          <Route path="/user/select-map" element={<SelectOnMap />} />
          <Route path="/user/ride-selection" element={<RideSelection />} />
          <Route path="/user/driver-searching" element={<DriverSearching />} />
          <Route path="/user/driver-assigned" element={<DriverAssigned />} />
          <Route path="/user/ride-tracking" element={<RideTracking />} />
          <Route path="/user/ride-complete" element={<RideComplete />} />
          <Route path="/user/wallet" element={<WalletPage />} />
          <Route path="/user/bookings" element={<BookingHistory />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/help" element={<HelpCenter />} />
          
          {/* Driver Routes */}
          <Route path="/driver/login" element={<DriverLogin />} />
          <Route path="/driver/register" element={<DriverRegistration />} />
          <Route path="/driver/verification-status" element={<DriverVerificationStatus />} />
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
          <Route path="/driver/ride-request" element={<DriverRideRequest />} />
          <Route path="/driver/active-ride" element={<DriverActiveRide />} />
          <Route path="/driver/earnings" element={<DriverEarnings />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/drivers" element={<DriverManagement />} />
          <Route path="/admin/verification" element={<DriverVerificationCenter />} />
          <Route path="/admin/rides" element={<RideMonitoring />} />
          <Route path="/admin/payments" element={<PaymentMonitoring />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
