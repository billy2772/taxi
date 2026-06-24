import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Car, DollarSign, TrendingUp, Clock, Navigation } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

export default function DriverDashboard() {
  const navigate = useNavigate()
  const [isOnline, setIsOnline] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-24">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Driver Dashboard</h1>
          <button 
            onClick={() => setIsOnline(!isOnline)}
            className={`px-4 py-2 rounded-full font-medium transition-all-smooth ${
              isOnline ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            {isOnline ? 'Online' : 'Offline'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Earnings Card */}
        <Card className="gradient-primary text-white shadow-premium-lg">
          <p className="text-white/80 mb-2">Today's Earnings</p>
          <h2 className="text-4xl font-bold mb-4">$186.50</h2>
          <div className="flex gap-4 text-sm">
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> 12 trips</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6.5 hrs</span>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card glass>
            <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold">$45.00</p>
            <p className="text-sm text-gray-500">Weekly Bonus</p>
          </Card>
          <Card glass>
            <Car className="w-8 h-8 text-primary-600 mb-2" />
            <p className="text-2xl font-bold">4.9</p>
            <p className="text-sm text-gray-500">Rating</p>
          </Card>
        </div>

        {/* New Ride Request */}
        {isOnline && (
          <Card glass className="border-2 border-primary-500">
            <div className="flex items-center gap-2 mb-4">
              <Navigation className="w-5 h-5 text-primary-600 animate-pulse" />
              <h3 className="text-lg font-bold">New Ride Request</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Pickup: Downtown Mall</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span>Drop: Airport Terminal 2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="font-medium">Estimated Fare</span>
                <span className="text-xl font-bold text-primary-600">$28.00</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" onClick={() => {}}>Decline</Button>
              <Button onClick={() => navigate('/driver/active-ride')}>Accept</Button>
            </div>
          </Card>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 glass dark:glass-dark backdrop-blur-xl border-t p-4">
        <div className="max-w-7xl mx-auto flex justify-around">
          {['Dashboard', 'Earnings', 'Profile'].map((item, i) => (
            <button key={i} className={`flex flex-col items-center ${i === 0 ? 'text-primary-600' : 'text-gray-500'}`}>
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
