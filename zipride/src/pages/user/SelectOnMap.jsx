import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MapPin, Navigation } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function SelectOnMap() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 relative">
      {/* Map Placeholder */}
      <div className="absolute inset-0 gradient-subtle dark:bg-gray-800">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-gray-400">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <p>Interactive Map View</p>
          </div>
        </div>
      </div>

      {/* Center Pin */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="gradient-primary rounded-full p-4 shadow-premium-lg"
        >
          <MapPin className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Bottom Panel */}
      <div className="absolute bottom-0 left-0 right-0">
        <Card glass className="backdrop-blur-xl m-4 shadow-premium-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
              <Navigation className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-500">Selected Location</p>
                <p className="font-medium">123 Main Street, City</p>
              </div>
            </div>
            <Button fullWidth onClick={() => navigate('/user/ride-selection')}>Confirm Pickup</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
