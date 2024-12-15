import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from './components/layout/dashboard-layout'
import { DashboardPage } from './pages/dashboard'
import { ComponentsPage } from './pages/components'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Navigate to="/dashboard" replace />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/components"
          element={
            <DashboardLayout>
              <ComponentsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </div>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App;