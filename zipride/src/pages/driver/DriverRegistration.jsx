import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Car as CarIcon, FileText, Upload, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Card from '../../components/Card'

export default function DriverRegistration() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const steps = ['Personal', 'Vehicle', 'License', 'RC', 'Insurance', 'Photo', 'Review']

  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Progress */}
        <div className="flex justify-between mb-8">
          {steps.map((s, i) => (
            <div key={i} className={`flex flex-col items-center ${i + 1 <= step ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i + 1 <= step ? 'gradient-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                {i + 1}
              </div>
              <span className="text-xs mt-1 hidden sm:block">{s}</span>
            </div>
          ))}
        </div>

        <Card glass>
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2"><User className="w-6 h-6" /> Personal Details</h2>
              <Input label="Full Name" placeholder="John Doe" />
              <Input label="Email" type="email" placeholder="john@example.com" />
              <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2"><CarIcon className="w-6 h-6" /> Vehicle Details</h2>
              <Input label="Vehicle Type" placeholder="Sedan" />
              <Input label="License Plate" placeholder="ABC 1234" />
              <Input label="Model Year" placeholder="2022" />
            </div>
          )}
          {step >= 3 && step <= 6 && (
            <div className="space-y-4 text-center py-8">
              <Upload className="w-16 h-16 mx-auto text-primary-600" />
              <h2 className="text-xl font-bold">Upload {steps[step - 1]} Document</h2>
              <p className="text-gray-500">Drag and drop or click to browse</p>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8">
                <FileText className="w-12 h-12 mx-auto text-gray-400" />
              </div>
            </div>
          )}
          {step === 7 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2"><CheckCircle className="w-6 h-6" /> Review & Submit</h2>
              <p className="text-gray-600 dark:text-gray-400">Please review your information before submitting.</p>
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-700 dark:text-green-400">
                All documents uploaded successfully!
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-6">
            {step > 1 && <Button variant="secondary" fullWidth onClick={() => setStep(step - 1)}>Back</Button>}
            <Button fullWidth onClick={() => step < 7 ? setStep(step + 1) : navigate('/driver/verification-status')}>
              {step === 7 ? 'Submit Application' : 'Continue'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
