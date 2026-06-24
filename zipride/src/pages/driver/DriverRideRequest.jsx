import { useNavigate } from 'react-router-dom'
import { MapPin, DollarSign, Clock } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function DriverRideRequest() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 flex items-center justify-center p-4">
      <Card glass className="w-full max-w-md backdrop-blur-xl">
        <h2 className="text-xl font-bold mb-4">New Ride Request</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Pickup</p>
              <p className="font-medium">Downtown Mall, Gate 3</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-sm text-gray-500">Drop</p>
              <p className="font-medium">Airport Terminal 2</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div>
              <p className="text-sm text-gray-500">Distance</p>
              <p className="font-semibold">12.5 km</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-semibold">25 min</p>
            </div>
          </div>
          <div className="p-4 gradient-primary rounded-xl text-white text-center">
            <p className="text-sm opacity-80">Estimated Fare</p>
            <p className="text-3xl font-bold">$28.00</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" fullWidth onClick={() => {}}>Decline</Button>
          <Button fullWidth onClick={() => navigate('/driver/active-ride')}>Accept Ride</Button>
        </div>
      </Card>
    </div>
  )
}
