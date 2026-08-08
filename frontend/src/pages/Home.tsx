import { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'

function Home() {
  const [backendMessage, setBackendMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then((response) => {
        setBackendMessage(response.data.message)
      })
      .catch((error) => {
        console.error('Error connecting to backend:', error)
      })
  }, [])

  return (
    <>
      {backendMessage && (
        <div className="bg-green-50 text-green-700 text-center py-2 text-sm">
          ✅ Backend says: {backendMessage}
        </div>
      )}
      <Hero />
      <Features />
      <HowItWorks />
    </>
  )
}

export default Home