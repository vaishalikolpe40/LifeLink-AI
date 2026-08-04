import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Emergency from './pages/Emergency'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App