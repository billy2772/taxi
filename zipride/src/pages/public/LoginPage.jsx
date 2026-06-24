import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Car, Phone, Mail, ArrowLeft, Shield } from 'lucide-react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'

export default function LoginPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState('login')
  const [loginMethod, setLoginMethod] = useState('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus()
    }
  }

  return (
    <div className="min-h-screen gradient-subtle dark:bg-gray-900 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {step === 'login' ? (
          <Card glass className="backdrop-blur-xl">
            <div className="text-center mb-8">
              <motion.div 
                className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Car className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold mb-2">Welcome to ZipRide</h1>
              <p className="text-gray-600 dark:text-gray-400">Sign in to continue your journey</p>
            </div>

            {/* Login Method Tabs */}
            <div className="flex gap-2 mb-6 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all-smooth flex items-center justify-center gap-2 ${
                  loginMethod === 'phone' 
                    ? 'gradient-primary text-white shadow-premium' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                <Phone className="w-4 h-4" />
                Phone
              </button>
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all-smooth flex items-center justify-center gap-2 ${
                  loginMethod === 'email' 
                    ? 'gradient-primary text-white shadow-premium' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>

            {/* Login Form */}
            <div className="space-y-4">
              {loginMethod === 'phone' ? (
                <Input
                  label="Mobile Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  icon={Phone}
                />
              ) : (
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={Mail}
                />
              )}

              <Button fullWidth size="lg" onClick={() => setStep('otp')}>
                Continue
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Your data is secure with us
              </p>
            </div>
          </Card>
        ) : (
          <Card glass className="backdrop-blur-xl">
            <button
              onClick={() => setStep('login')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="text-center mb-8">
              <motion.div 
                className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold mb-2">Verification</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Enter the 6-digit code sent to {loginMethod === 'phone' ? phoneNumber : email}
              </p>
            </div>

            {/* OTP Input */}
            <div className="flex justify-center gap-2 mb-6">
              {otp.map((digit, index) => (
                <motion.input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-2xl font-bold rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary-500 focus:outline-none transition-colors"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                />
              ))}
            </div>

            <Button fullWidth size="lg" onClick={() => navigate('/user/dashboard')}>
              Verify & Continue
            </Button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Didn't receive the code?{' '}
                <button className="text-primary-600 font-medium hover:underline">
                  Resend
                </button>
              </p>
            </div>
          </Card>
        )}
      </motion.div>
    </div>
  )
}
