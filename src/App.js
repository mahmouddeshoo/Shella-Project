import './component/css/landingpage.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const LandingPage = React.lazy(() => import('./component/pages/landingpage.js')); 
const JoinAsDriver = React.lazy(() => import('./component/pages/joinasdriver.js')); 

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join-as-driver" element={<JoinAsDriver />} />
      </Routes>
    </Suspense>
  );
}

export default App;