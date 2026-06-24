import { useNavigate } from 'react-router-dom'
import { Car, Phone } from 'lucide-react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'

export default function DriverLogin() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen gradient-subtle dark:bg-gray-900 flex items-center justify-center p-4">
      <Card glass className="w-full max-w-md backdrop-blur-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Driver Login</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back, partner</p>
        </div>
        <div className="space-y-4">
          <Input label="Mobile Number" type="tel" placeholder="+1 (555) 000-0000" icon={Phone} />
          <Button fullWidth size="lg" onClick={() => navigate('/driver/dashboard')}>Continue</Button>
          <p className="text-center text-sm text-gray-500">
            New driver? <button onClick={() => navigate('/driver/register')} className="text-primary-600 font-medium">Register here</button>
          </p>
        </div>
      </Card>
    </div>
  )
}
