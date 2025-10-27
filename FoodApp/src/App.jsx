import { useState } from 'react'
import Search from './component/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Search/>
      
    </div>
  )
}

export default App
