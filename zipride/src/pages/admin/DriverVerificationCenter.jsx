import { useNavigate } from 'react-router-dom'
import { ArrowLeft, FileText, CheckCircle, XCircle, Clock } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

export default function DriverVerificationCenter() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Verification Center</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <Card glass className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-gray-500">Pending</p>
          </Card>
          <Card glass className="text-center">
            <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-500">Under Review</p>
          </Card>
          <Card glass className="text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">156</p>
            <p className="text-sm text-gray-500">Approved Today</p>
          </Card>
        </div>
        <Card glass>
          <h2 className="text-lg font-semibold mb-4">Pending Verifications</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold">Driver Application #{i}</p>
                    <p className="text-sm text-gray-500">Submitted 2 hours ago</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-full text-sm">Pending Review</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                  {['License', 'RC', 'Insurance', 'Photo', 'Background'].map((doc) => (
                    <div key={doc} className="p-2 bg-white dark:bg-gray-700 rounded-lg text-center text-sm">
                      <FileText className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                      {doc}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="danger" className="flex-1" icon={XCircle}>Reject</Button>
                  <Button className="flex-1" icon={CheckCircle}>Approve</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
