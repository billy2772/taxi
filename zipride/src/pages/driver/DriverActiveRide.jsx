import { useNavigate } from 'react-router-dom'
import { MapPin, Phone, MessageSquare, Navigation } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function DriverActiveRide() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-32">
      <div className="h-48 gradient-subtle dark:bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Navigation className="w-12 h-12 text-gray-400" />
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 py-6 -mt-8 relative z-10">
        <Card glass className="backdrop-blur-xl shadow-premium-lg">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full text-sm font-medium">Trip in Progress</span>
            <span className="text-2xl font-bold">$28.00</span>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">JD</div>
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">4.9 ★ • Premium Rider</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600"><Phone className="w-5 h-5" /></button>
              <button className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600"><MessageSquare className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Downtown Mall, Gate 3</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Airport Terminal 2</span>
            </div>
          </div>
          <Button fullWidth onClick={() => navigate('/driver/earnings')}>Complete Trip</Button>
        </Card>
      </main>
    </div>
  )
}
