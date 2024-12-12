import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import SideNav from './components/layout/SideNav'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="flex">
        <SideNav />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App 