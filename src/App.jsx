import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './pages/css/style.css'
import Game from './pages/Game'

function App() {
  return (
    <>
    <div className='w-100 d-flex justify-content-center align-items-center'>
    <Game/>
    </div>
    </>
  )
}

export default App
