import { useNavigate } from 'react-router-dom'
import { Shield, Mail, Lock } from 'lucide-react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'

export default function AdminLogin() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen gradient-subtle dark:bg-gray-900 flex items-center justify-center p-4">
      <Card glass className="w-full max-w-md backdrop-blur-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Admin Portal</h1>
          <p className="text-gray-600 dark:text-gray-400">ZipRide Management Console</p>
        </div>
        <div className="space-y-4">
          <Input label="Admin Email" type="email" placeholder="admin@zipride.com" icon={Mail} />
          <Input label="Password" type="password" placeholder="••••••••" icon={Lock} />
          <Button fullWidth size="lg" onClick={() => navigate('/admin/dashboard')}>Sign In</Button>
        </div>
      </Card>
    </div>
  )
}
