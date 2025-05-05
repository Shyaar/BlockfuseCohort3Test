import { GrDashboard } from 'react-icons/gr';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameDashboard from './pages/GameDashboard';






function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<GameDashboard />} />
        </Routes>
        
      </BrowserRouter>

    </>

  )
}

export default App
