import { useState } from 'react'
import 'index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-red-400 rounded-4'>
        <h1>card</h1>
        <p>this my card</p>
      </div>
     
    </>
  )
}

export default App;
