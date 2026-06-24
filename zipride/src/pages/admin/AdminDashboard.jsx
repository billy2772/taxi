import { useNavigate } from 'react-router-dom'
import { Users, Car, TrendingUp, DollarSign, Activity, Clock } from 'lucide-react'
import Card from '../../components/Card'

export default function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-bold">A</div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card glass className="cursor-pointer" onClick={() => navigate('/admin/users')}>
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-2xl font-bold">12,458</p>
            <p className="text-sm text-gray-500">Total Users</p>
          </Card>
          <Card glass className="cursor-pointer" onClick={() => navigate('/admin/drivers')}>
            <Car className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold">3,842</p>
            <p className="text-sm text-gray-500">Total Drivers</p>
          </Card>
          <Card glass>
            <Activity className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-2xl font-bold">156</p>
            <p className="text-sm text-gray-500">Active Rides</p>
          </Card>
          <Card glass className="cursor-pointer" onClick={() => navigate('/admin/payments')}>
            <DollarSign className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">$48.2K</p>
            <p className="text-sm text-gray-500">Revenue (Today)</p>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Users, label: 'User Management', path: '/admin/users' },
            { icon: Car, label: 'Driver Management', path: '/admin/drivers' },
            { icon: Shield, label: 'Verification Center', path: '/admin/verification' },
            { icon: Activity, label: 'Ride Monitoring', path: '/admin/rides' },
            { icon: DollarSign, label: 'Payment Monitoring', path: '/admin/payments' },
            { icon: Clock, label: 'Settings', path: '/admin/settings' }
          ].map((item, index) => (
            <Card key={index} glass hover className="cursor-pointer" onClick={() => navigate(item.path)}>
              <item.icon className="w-8 h-8 text-primary-600 mb-2" />
              <p className="font-medium">{item.label}</p>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card glass>
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white text-sm">U{i}</div>
                  <div>
                    <p className="font-medium">New ride completed</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">+$24.50</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
