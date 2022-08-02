import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RouterConfig from './router'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="App">
      <RouterConfig />
      <Footer />
    </div>
  )
}

export default App
