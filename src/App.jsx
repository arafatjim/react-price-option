
import './App.css'
import DaisyNav from './Component/DaisyNav/DaisyNav'
import Navbar from './Component/DaisyNav/Navbar/Navbar'
// import PriceOption from './Component/PriceOption/PriceOption'
import PriceOptions from './Component/PriceOptions/PriceOptions'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      
    </>
  )
}

export default App
