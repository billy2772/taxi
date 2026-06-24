import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, Star, Search } from 'lucide-react'
import Card from '../../components/Card'
import Input from '../../components/Input'

export default function LocationSearch() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Select Location</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <Card glass className="backdrop-blur-xl">
          <div className="space-y-4">
            <Input placeholder="Pickup location" icon={MapPin} />
            <Input placeholder="Enter destination" icon={Search} />
          </div>
        </Card>

        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-600" />
            Recent Locations
          </h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} whileTap={{ scale: 0.98 }}>
                <Card hover className="flex items-center gap-4 cursor-pointer">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Location {i}</p>
                    <p className="text-sm text-gray-500">Recent</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Saved Places
          </h2>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <motion.div key={i} whileTap={{ scale: 0.98 }}>
                <Card hover className="flex items-center gap-4 cursor-pointer">
                  <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Saved Location {i}</p>
                    <p className="text-sm text-gray-500">Home/Work</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="h-64 gradient-primary rounded-2xl flex items-center justify-center shadow-premium">
          <div className="text-center text-white">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <p className="font-medium">Map Preview</p>
          </div>
        </section>
      </main>
    </div>
  )
}
