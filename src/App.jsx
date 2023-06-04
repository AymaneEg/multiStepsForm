import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Components/Container/Container'
import { Provider } from 'react-redux'
function App() {

  return (
    <> 
    <div className='w-full h-screen flex justify-center items-center relative'>
      <Container/>
    </div>
    </>
  )
}

export default App
