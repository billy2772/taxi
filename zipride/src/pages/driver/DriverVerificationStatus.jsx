import { useNavigate } from 'react-router-dom'
import { Clock, CheckCircle, XCircle, FileText } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'

export default function DriverVerificationStatus() {
  const navigate = useNavigate()
  const status = 'pending' // pending, reviewing, approved, rejected

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 flex items-center justify-center p-4">
      <Card glass className="w-full max-w-md backdrop-blur-xl text-center">
        {status === 'pending' && <Clock className="w-20 h-20 mx-auto mb-4 text-yellow-500" />}
        {status === 'reviewing' && <FileText className="w-20 h-20 mx-auto mb-4 text-blue-500" />}
        {status === 'approved' && <CheckCircle className="w-20 h-20 mx-auto mb-4 text-green-500" />}
        {status === 'rejected' && <XCircle className="w-20 h-20 mx-auto mb-4 text-red-500" />}
        
        <h1 className="text-2xl font-bold mb-2 capitalize">{status} Verification</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {status === 'pending' && 'Your application is awaiting review.'}
          {status === 'reviewing' && 'Our team is reviewing your documents.'}
          {status === 'approved' && 'Congratulations! You can start driving.'}
          {status === 'rejected' && 'Some documents need correction.'}
        </p>

        <div className="space-y-3 mb-6">
          {['Personal Info', 'Vehicle Details', 'Driving License', 'RC Document', 'Insurance'].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <span>{item}</span>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          ))}
        </div>

        <Button fullWidth onClick={() => navigate('/driver/dashboard')}>
          {status === 'approved' ? 'Go to Dashboard' : 'Check Status Later'}
        </Button>
      </Card>
    </div>
  )
}
