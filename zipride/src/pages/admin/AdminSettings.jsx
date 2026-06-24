import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Settings, Bell, Shield, Globe } from 'lucide-react'
import Card from '../../components/Card'

export default function AdminSettings() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-24">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <Card glass className="flex items-center gap-4 cursor-pointer">
          <Globe className="w-6 h-6 text-primary-600" />
          <div className="flex-1">
            <p className="font-medium">General Settings</p>
            <p className="text-sm text-gray-500">Language, Region, Timezone</p>
          </div>
          <ArrowLeft className="w-5 h-5 rotate-180 text-gray-400" />
        </Card>
        <Card glass className="flex items-center gap-4 cursor-pointer">
          <Bell className="w-6 h-6 text-blue-600" />
          <div className="flex-1">
            <p className="font-medium">Notifications</p>
            <p className="text-sm text-gray-500">Email, SMS, Push alerts</p>
          </div>
          <ArrowLeft className="w-5 h-5 rotate-180 text-gray-400" />
        </Card>
        <Card glass className="flex items-center gap-4 cursor-pointer">
          <Shield className="w-6 h-6 text-green-600" />
          <div className="flex-1">
            <p className="font-medium">Security</p>
            <p className="text-sm text-gray-500">2FA, Password, Sessions</p>
          </div>
          <ArrowLeft className="w-5 h-5 rotate-180 text-gray-400" />
        </Card>
        <Card glass>
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-3">
            {[
              { name: 'API Services', status: 'Operational' },
              { name: 'Database', status: 'Operational' },
              { name: 'Payment Gateway', status: 'Operational' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span>{item.name}</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full text-sm">{item.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
