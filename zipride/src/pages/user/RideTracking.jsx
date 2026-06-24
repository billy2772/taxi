import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Phone, Share2, AlertCircle, MapPin, Clock } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function RideTracking() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-32">
      {/* Map */}
      <div className="h-48 gradient-subtle dark:bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="w-12 h-12 text-gray-400" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 -mt-8 relative z-10">
        <Card glass className="backdrop-blur-xl shadow-premium-lg">
          {/* Status Timeline */}
          <div className="space-y-4 mb-6">
            {[
              { status: 'Driver Assigned', time: '2:30 PM', completed: true },
              { status: 'Driver Arriving', time: '2:33 PM', completed: true },
              { status: 'Trip Started', time: 'In Progress', active: true },
              { status: 'Destination', time: 'Pending', completed: false }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.completed ? 'gradient-primary' : item.active ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-700'
                }`}>
                  {item.completed && <MapPin className="w-4 h-4 text-white" />}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${item.active ? 'text-primary-600' : ''}`}>{item.status}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="text-xs">Call</span>
            </button>
            <button className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 flex flex-col items-center gap-2">
              <Share2 className="w-6 h-6" />
              <span className="text-xs">Share</span>
            </button>
            <button className="p-4 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-600 flex flex-col items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              <span className="text-xs">SOS</span>
            </button>
          </div>

          <Button fullWidth variant="secondary" onClick={() => navigate('/user/ride-complete')}>Complete Ride (Demo)</Button>
        </Card>
      </main>
    </div>
  )
}
