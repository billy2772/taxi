import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Search, MoreVertical } from 'lucide-react'
import Card from '../../components/Card'
import Input from '../../components/Input'

export default function UserManagement() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-subtle dark:bg-gray-900">
      <header className="sticky top-0 z-40 glass dark:glass-dark backdrop-blur-xl p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">User Management</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <Input placeholder="Search users..." icon={Search} />
        <Card glass>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 text-left">
                  <th className="p-4 font-medium">User</th>
                  <th className="p-4 font-medium hidden md:table-cell">Email</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white text-sm">U{i}</div>
                        <span className="font-medium">User {i}</span>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell text-gray-500">user{i}@example.com</td>
                    <td className="p-4"><span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full text-sm">Active</span></td>
                    <td className="p-4"><button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"><MoreVertical className="w-5 h-5" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  )
}
