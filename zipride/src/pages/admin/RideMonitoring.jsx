import { useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Car, Navigation } from 'lucide-react'
import Card from '../../components/Card'

export default function RideMonitoring() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Ride Monitoring</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <Card glass className="h-64 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Navigation className="w-16 h-16 mx-auto mb-4" />
            <p>Live Map View - Active Rides</p>
          </div>
        </Card>
        <Card glass>
          <h2 className="text-lg font-semibold mb-4">Active Rides</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">Ride #{1000 + i}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full text-sm">In Progress</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span>Pickup Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span>Drop Location</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
