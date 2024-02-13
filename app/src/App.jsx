import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline p-12 justify-center text-center font-serif">
      Chat Bot GPT
    </h1>
      </div>
    </>
  )
}

export default App
