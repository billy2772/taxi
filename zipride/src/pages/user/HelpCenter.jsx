import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Search, MessageSquare, Phone, Mail } from 'lucide-react'
import Card from '../../components/Card'
import Input from '../../components/Input'

export default function HelpCenter() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const faqs = [
    { q: 'How do I cancel a ride?', a: 'You can cancel a ride from the booking details page before the driver arrives.' },
    { q: 'What if I forgot something in the car?', a: 'Contact the driver directly through the app or reach out to support.' },
    { q: 'How do I add a payment method?', a: 'Go to Profile > Payment Methods and add your card details.' },
    { q: 'Can I schedule a ride in advance?', a: 'Yes! Select Schedule when booking and choose your preferred time.' }
  ]

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Help Center</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <Input 
          placeholder="Search for help..." 
          icon={Search}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Contact Options */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: MessageSquare, label: 'Chat' },
            { icon: Phone, label: 'Call' },
            { icon: Mail, label: 'Email' }
          ].map((option, index) => (
            <Card key={index} glass hover className="text-center cursor-pointer">
              <option.icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
              <p className="text-sm font-medium">{option.label}</p>
            </Card>
          ))}
        </div>

        {/* FAQs */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} glass>
                <details className="group">
                  <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <span className="transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">{faq.a}</p>
                </details>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
