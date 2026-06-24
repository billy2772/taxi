import { motion } from 'framer-motion'
import { useNavigate, useEffect } from 'react'
import { Car } from 'lucide-react'

export default function DriverSearching() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/user/driver-assigned')
    }, 4000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Ripple Animation */}
        <div className="relative w-48 h-48 mx-auto">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 gradient-primary rounded-full opacity-30"
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
          <motion.div 
            className="absolute inset-8 gradient-primary rounded-full flex items-center justify-center shadow-premium-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Car className="w-16 h-16 text-white" />
          </motion.div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">Finding Your Driver</h1>
          <p className="text-gray-600 dark:text-gray-400">Connecting you with nearby drivers...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
          <motion.div 
            className="h-full gradient-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4 }}
          />
        </div>
      </div>
    </div>
  )
}
