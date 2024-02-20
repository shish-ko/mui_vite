import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AccessAlarmOutlined} from '@mui/icons-material';

function App() {
  const [count, setCount] = useState(0)
  console.log(AdapterDayjs);

  return (
    <>
      <div>
        <AccessAlarmOutlined />
        
      </div>
    </>
  )
}

export default App
