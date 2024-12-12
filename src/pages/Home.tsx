import * as React from 'react'
import { Home as HomeIcon } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <HomeIcon className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Cursor App</h1>
      </div>
      <p className="text-lg text-gray-600">
        This is a beautiful, production-ready React application built with modern tools and best practices.
        Start customizing it to create something amazing!
      </p>
    </div>
  )
}

export default Home 