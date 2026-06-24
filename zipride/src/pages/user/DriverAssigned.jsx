import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Phone, MessageSquare, MapPin, Clock, Star } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function DriverAssigned() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-32">
      {/* Map Placeholder */}
      <div className="h-64 gradient-subtle dark:bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="w-12 h-12 text-gray-400" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 -mt-12 relative z-10">
        <Card glass className="backdrop-blur-xl shadow-premium-lg">
          {/* Driver Info */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">John Doe</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>4.9 • 2,500+ rides</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <p className="text-sm text-gray-500">Vehicle</p>
              <p className="font-semibold">Toyota Camry</p>
              <p className="text-xs text-gray-400">ABC 1234</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <p className="text-sm text-gray-500">ETA</p>
              <p className="font-semibold flex items-center gap-1">
                <Clock className="w-4 h-4" /> 3 min
              </p>
              <p className="text-xs text-gray-400">2.5 km away</p>
            </div>
          </div>

          <Button fullWidth onClick={() => navigate('/user/ride-tracking')}>Track Ride</Button>
        </Card>
      </main>
    </div>
  )
}
