import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/layout/TopNav';
import SideNav from './components/layout/SideNav';

// Bokeh background elements
const BokehBackground = () => (
  <div className="fixed inset-0 overflow-hidden -z-10">
    <div className="bokeh bg-brand-primary w-[40rem] h-[40rem] -top-20 -left-20"></div>
    <div className="bokeh bg-brand-secondary w-[45rem] h-[45rem] top-1/3 -right-20"></div>
    <div className="bokeh bg-brand-accent w-[50rem] h-[50rem] -bottom-40 left-1/4"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <BokehBackground />
        <TopNav />
        <SideNav />
        <main className="ml-72 pt-24">
          <div className="max-w-7xl mx-auto px-6 pb-6">
            <div className="glass-card p-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl">My Dashboard</h1>
                <div className="flex space-x-2">
                  <button className="glass-button">All</button>
                  <button className="glass-button">Withdrawal</button>
                  <button className="glass-button">Savings</button>
                  <button className="glass-button">Deposit</button>
                </div>
              </div>

              {/* Revenue Flow Chart */}
              <div className="glass-card p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl">Revenue Flow</h2>
                  <button className="glass-button text-sm">View All</button>
                </div>
                <div className="h-64 flex items-end space-x-6">
                  {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((month, i) => (
                    <div key={month} className="flex-1">
                      <div className="h-full relative">
                        <div className={`chart-bar ${i === 4 ? 'bg-brand-primary/20' : ''}`}>
                          <div 
                            className="chart-bar-fill" 
                            style={{ 
                              height: `${[40, 60, 45, 50, 85, 55][i]}%`,
                              opacity: i === 4 ? '1' : '0.3'
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-center mt-2 text-sm text-text-secondary">{month}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg mb-4">Available</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="text-sm text-text-secondary">Total Balance</div>
                      <div className="text-3xl font-bold">$22,350.50</div>
                    </div>
                    <div className="text-brand-primary">+12%</div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg mb-4">Recent Transactions</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Figma', amount: '-$15.00' },
                      { name: 'Grammarly', amount: '-$10.00' },
                      { name: 'Blender', amount: '-$15.00' },
                    ].map((tx) => (
                      <div key={tx.name} className="flex justify-between items-center">
                        <span className="text-text-secondary">{tx.name}</span>
                        <span>{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
