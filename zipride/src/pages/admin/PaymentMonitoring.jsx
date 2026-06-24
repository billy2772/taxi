import { useNavigate } from 'react-router-dom'
import { ArrowLeft, DollarSign, TrendingUp, CreditCard } from 'lucide-react'
import Card from '../../components/Card'

export default function PaymentMonitoring() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Payment Monitoring</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card glass>
            <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-2xl font-bold">$48.2K</p>
            <p className="text-sm text-gray-500">Today</p>
          </Card>
          <Card glass>
            <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-2xl font-bold">$286K</p>
            <p className="text-sm text-gray-500">This Week</p>
          </Card>
          <Card glass>
            <CreditCard className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-2xl font-bold">$1.2M</p>
            <p className="text-sm text-gray-500">This Month</p>
          </Card>
          <Card glass>
            <DollarSign className="w-8 h-8 text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">$14.8M</p>
            <p className="text-sm text-gray-500">YTD</p>
          </Card>
        </div>
        <Card glass>
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <div>
                  <p className="font-medium">Transaction #{5000 + i}</p>
                  <p className="text-sm text-gray-500">Today, 2:3{i} PM</p>
                </div>
                <span className="font-semibold text-green-600">+${20 + i}.50</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
