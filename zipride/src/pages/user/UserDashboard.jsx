import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MapPin, Clock, Star, Car, Plane, Calendar, Home, BookOpen, Wallet, User, Search } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

export default function UserDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Hello, Rider</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Where to today?</p>
            </div>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-premium"
            >
              <User className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Location Cards */}
        <Card glass className="backdrop-blur-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl transition-all-smooth hover:bg-white/70 dark:hover:bg-gray-700/70 cursor-pointer" onClick={() => navigate('/user/location-search')}>
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Pickup Location</p>
                <p className="font-medium">Current Location</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl transition-all-smooth hover:bg-white/70 dark:hover:bg-gray-700/70 cursor-pointer" onClick={() => navigate('/user/location-search')}>
              <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Destination</p>
                <p className="font-medium">Search Destination</p>
              </div>
            </div>
          </div>
          <Button fullWidth className="mt-4" onClick={() => navigate('/user/ride-selection')}>Find Rides</Button>
        </Card>

        {/* Ride Types */}
        <section>
          <h2 className="text-xl font-bold mb-4">Ride Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Inner City', icon: Car, color: 'from-primary-500 to-primary-600' },
              { name: 'Outer City', icon: MapPin, color: 'from-accent-500 to-accent-600' }
            ].map((ride, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card hover className={`bg-gradient-to-br ${ride.color} text-white cursor-pointer`} onClick={() => navigate('/user/ride-selection')}>
                  <ride.icon className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold">{ride.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-xl font-bold mb-4">Quick Services</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Airport', icon: Plane },
              { name: 'Rental', icon: Clock },
              { name: 'Schedule', icon: Calendar }
            ].map((feature, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card glass hover className="text-center cursor-pointer">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-2">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">{feature.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Explore City */}
        <section>
          <h2 className="text-xl font-bold mb-4">Explore City</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Tourist Places', icon: Star },
              { name: 'Railway Station', icon: Car },
              { name: 'Bus Stand', icon: MapPin },
              { name: 'Airport', icon: Plane }
            ].map((place, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Card glass hover className="cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <place.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="font-medium">{place.name}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass dark:glass-dark backdrop-blur-xl border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {[
              { icon: Home, label: 'Home', active: true, path: '/user/dashboard' },
              { icon: BookOpen, label: 'Bookings', path: '/user/bookings' },
              { icon: Wallet, label: 'Wallet', path: '/user/wallet' },
              { icon: User, label: 'Profile', path: '/user/profile' }
            ].map((item, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                  item.active ? 'text-primary-600' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
