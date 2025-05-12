import { useState } from 'react'
import CryptoAddressBook from './components/addresss-book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CryptoAddressBook />
    </>
  )
}

export default App
