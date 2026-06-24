import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Car, Clock, DollarSign, Plus } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function RideSelection() {
  const navigate = useNavigate()

  const rides = [
    { type: 'Hatchback', price: '$12-15', time: '3 min', capacity: 4 },
    { type: 'Sedan', price: '$18-22', time: '5 min', capacity: 4 },
    { type: 'SUV', price: '$28-35', time: '7 min', capacity: 6 }
  ]

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-32">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <h1 className="text-xl font-bold">Select Your Ride</h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-4">
        {rides.map((ride, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <Card hover glass className="cursor-pointer" onClick={() => navigate('/user/driver-searching')}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{ride.type}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{ride.time}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{ride.price}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{ride.capacity} seats</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        <Card glass>
          <button className="w-full flex items-center justify-center gap-2 py-4 text-primary-600 font-medium">
            <Plus className="w-5 h-5" />
            Add Stop
          </button>
        </Card>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 glass dark:glass-dark backdrop-blur-xl border-t">
        <Button fullWidth size="lg" onClick={() => navigate('/user/driver-searching')}>Book Now</Button>
      </div>
    </div>
  )
}
