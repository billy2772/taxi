import { useNavigate } from 'react-router-dom'
import { ArrowLeft, DollarSign, TrendingUp, Calendar } from 'lucide-react'
import Card from '../../components/Card'

export default function DriverEarnings() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-24">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Earnings</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <Card className="gradient-primary text-white shadow-premium-lg">
          <p className="text-white/80 mb-2">Total Earnings</p>
          <h2 className="text-4xl font-bold">$1,248.50</h2>
          <p className="text-sm opacity-80 mt-2">This month</p>
        </Card>
        <div className="grid grid-cols-3 gap-4">
          <Card glass className="text-center">
            <DollarSign className="w-6 h-6 mx-auto mb-2 text-green-600" />
            <p className="text-xl font-bold">$186.50</p>
            <p className="text-xs text-gray-500">Today</p>
          </Card>
          <Card glass className="text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-xl font-bold">$892.00</p>
            <p className="text-xs text-gray-500">This Week</p>
          </Card>
          <Card glass className="text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-xl font-bold">$1,248.50</p>
            <p className="text-xs text-gray-500">This Month</p>
          </Card>
        </div>
        <section>
          <h2 className="text-lg font-semibold mb-4">Recent Trips</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} glass className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Trip #{1000 + i}</p>
                  <p className="text-sm text-gray-500">Today, 2:30 PM</p>
                </div>
                <span className="font-semibold text-green-600">+$24.50</span>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
