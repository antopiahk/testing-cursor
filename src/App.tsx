import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <div className="card">
          <h1 className="text-2xl font-bold mb-4 text-gradient">Welcome to RecruitPro</h1>
          <p className="text-gray-400">Your modern recruitment management solution.</p>
        </div>
      </Layout>
    </Router>
  );
}

export default App; 