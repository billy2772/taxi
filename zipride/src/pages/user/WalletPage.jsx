import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, CreditCard, TrendingUp, Clock } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function WalletPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 pb-24">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Wallet</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Balance Card */}
        <Card className="gradient-primary text-white shadow-premium-lg">
          <p className="text-white/80 mb-2">Current Balance</p>
          <h2 className="text-4xl font-bold mb-4">$156.50</h2>
          <Button variant="secondary" className="w-full sm:w-auto" icon={Plus}>Add Money</Button>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card glass hover className="text-center cursor-pointer">
            <CreditCard className="w-8 h-8 mx-auto mb-2 text-primary-600" />
            <p className="font-medium">Add via Card</p>
          </Card>
          <Card glass hover className="text-center cursor-pointer">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-accent-600" />
            <p className="font-medium">Cashback</p>
          </Card>
        </div>

        {/* Transactions */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-600" />
            Recent Transactions
          </h2>
          <div className="space-y-3">
            {[
              { type: 'Ride', amount: '-$24.50', date: 'Today', desc: 'Trip to Downtown' },
              { type: 'Added', amount: '+$100.00', date: 'Yesterday', desc: 'Wallet recharge' },
              { type: 'Ride', amount: '-$18.00', date: 'Jun 22', desc: 'Airport transfer' }
            ].map((tx, index) => (
              <Card key={index} glass className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{tx.desc}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <span className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{tx.amount}</span>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 glass dark:glass-dark backdrop-blur-xl border-t p-4">
        <div className="max-w-7xl mx-auto flex justify-around">
          {['Home', 'Bookings', 'Wallet', 'Profile'].map((item, i) => (
            <button key={i} className={`flex flex-col items-center ${i === 2 ? 'text-primary-600' : 'text-gray-500'}`}>
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
