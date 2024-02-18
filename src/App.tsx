import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as pkg from '@mui/x-date-pickers/AdapterDayjs';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
const { AdapterDayjs } = pkg;

function App() {
  const [count, setCount] = useState(0)
  console.log(AdapterDayjs);

  return (
    <>
      <div>
        <AccessAlarm />
        
      </div>
    </>
  )
}

export default App
