import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, MapPin, Car } from 'lucide-react'
import Card from '../../components/Card'

export default function BookingHistory() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('upcoming')

  const tabs = ['upcoming', 'completed', 'cancelled']

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-24">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">My Bookings</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg font-medium capitalize transition-all-smooth ${
                activeTab === tab ? 'gradient-primary text-white shadow-premium' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {[1, 2, 3].map((booking) => (
            <motion.div key={booking} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card glass hover className="cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Sedan • ABC 1234</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> Jun 24, 2024
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full text-sm font-medium">
                    {activeTab === 'upcoming' ? 'Confirmed' : activeTab === 'completed' ? 'Completed' : 'Cancelled'}
                  </span>
                </div>
                <div className="space-y-2 pl-15">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span>Pickup Location</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-accent-600" />
                    <span>Drop Location</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>2:30 PM</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 glass dark:glass-dark backdrop-blur-xl border-t p-4">
        <div className="max-w-7xl mx-auto flex justify-around">
          {['Home', 'Bookings', 'Wallet', 'Profile'].map((item, i) => (
            <button key={i} className={`flex flex-col items-center ${i === 1 ? 'text-primary-600' : 'text-gray-500'}`}>
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
