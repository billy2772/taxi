import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Star, CreditCard, Wallet, DollarSign } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function RideComplete() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 flex items-center justify-center p-4">
      <Card glass className="backdrop-blur-xl w-full max-w-md shadow-premium-lg">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-2xl font-bold mb-2">Ride Completed!</h1>
          <p className="text-gray-600 dark:text-gray-400">Hope you had a great experience</p>
        </div>

        {/* Fare Summary */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Total Fare</span>
            <span className="text-2xl font-bold">$24.50</span>
          </div>
          <div className="text-sm text-gray-400">Distance: 8.5 km • Duration: 22 min</div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <p className="text-center text-sm text-gray-500 mb-3">Rate your driver</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:scale-110 transition-transform"
              >
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3 mb-6">
          {[
            { icon: CreditCard, name: 'Credit Card' },
            { icon: Wallet, name: 'ZipRide Wallet' },
            { icon: DollarSign, name: 'Cash' }
          ].map((method, index) => (
            <button key={index} className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center gap-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <method.icon className="w-6 h-6 text-primary-600" />
              <span className="font-medium">{method.name}</span>
            </button>
          ))}
        </div>

        <Button fullWidth onClick={() => navigate('/user/dashboard')}>Done</Button>
      </Card>
    </div>
  )
}
