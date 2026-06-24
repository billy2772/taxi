import { useNavigate } from 'react-router-dom'
import { ArrowLeft, User, Settings, Shield, HelpCircle, CreditCard, MapPin, LogOut, Sun, Moon } from 'lucide-react'
import Card from '../../components/Card'
import { useTheme } from '../../context/ThemeContext'

export default function UserProfile() {
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useTheme()

  const menuItems = [
    { icon: User, label: 'Personal Information', path: '#' },
    { icon: CreditCard, label: 'Payment Methods', path: '#' },
    { icon: MapPin, label: 'Saved Addresses', path: '#' },
    { icon: Settings, label: 'Settings', path: '#' },
    { icon: Shield, label: 'Safety Center', path: '#' },
    { icon: HelpCircle, label: 'Help & Support', path: '/user/help' },
  ]

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-24">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card glass className="text-center">
          <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
            JD
          </div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500">+1 (555) 123-4567</p>
          <p className="text-sm text-gray-400 mt-2">Member since 2024</p>
        </Card>

        {/* Theme Toggle */}
        <Card glass className="flex items-center justify-between cursor-pointer" onClick={toggleTheme}>
          <div className="flex items-center gap-4">
            {isDark ? <Moon className="w-6 h-6 text-primary-600" /> : <Sun className="w-6 h-6 text-yellow-500" />}
            <span className="font-medium">Dark Mode</span>
          </div>
          <div className={`w-12 h-6 rounded-full transition-colors ${isDark ? 'gradient-primary' : 'bg-gray-300'} relative`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isDark ? 'left-7' : 'left-1'}`} />
          </div>
        </Card>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <Card key={index} glass hover className="flex items-center gap-4 cursor-pointer">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary-600" />
              </div>
              <span className="flex-1 font-medium">{item.label}</span>
              <ArrowLeft className="w-5 h-5 rotate-180 text-gray-400" />
            </Card>
          ))}
        </div>

        {/* Logout */}
        <Card glass className="flex items-center gap-4 cursor-pointer text-red-600" onClick={() => navigate('/')}>
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Card>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 glass dark:glass-dark backdrop-blur-xl border-t p-4">
        <div className="max-w-7xl mx-auto flex justify-around">
          {['Home', 'Bookings', 'Wallet', 'Profile'].map((item, i) => (
            <button key={i} className={`flex flex-col items-center ${i === 3 ? 'text-primary-600' : 'text-gray-500'}`}>
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
