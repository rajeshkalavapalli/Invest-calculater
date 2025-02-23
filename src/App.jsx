import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
      <UserInput purpose1="initial investment" purpose2="annual investment" />
      <UserInput purpose1="expected return" purpose2="duration" />
    </div>
    </>
  )
}

export default App
