import {useState, useCllback} from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, serNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // function to change randome password

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
