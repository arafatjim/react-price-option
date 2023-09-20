
import './App.css'
import DaisyNav from './Component/DaisyNav/DaisyNav'
import Navbar from './Component/DaisyNav/Navbar/Navbar'
import LineChart from './Component/LineChart/LineChart'
import Phones from './Component/Phones/Phones'
import PieChart from './Component/PieChart/PieChart'

// import PriceOption from './Component/PriceOption/PriceOption'
import PriceOptions from './Component/PriceOptions/PriceOptions'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <PieChart></PieChart>
      <Phones></Phones>
      
      
    </>
  )
}

export default App
