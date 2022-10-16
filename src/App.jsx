import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as faIcons from 'react-icons/fa'
import HeadComponent from './layout/header';
import Navbar from './layout/NavBar';
import DashboardComponent from './pages/dashboard';



function App() {
  const [count, setCount] = useState(0)
  const [sidebar,setSidebar] = useState(false);
  var display = 'hidden';



  return (
    <>
    
    <div className="App">
      <header>
        <HeadComponent func={setSidebar} sidebar={sidebar}/>
      </header>
      <div className='flex'>
        <Navbar sidebar={sidebar}/>
          <div className={ `w-full bg-primary md:pr-4 flex-col items-center md:w-full h-screen text-center duration-150 ${sidebar?"translate-x-0": "-translate-x-32 md:-translate-x-16"}`}>

                <p className=' mt-4 mb-3'>Main Dash Board</p>

                   <div className=' w-5/6 rounded-lg bg-secondary h-full border-inherit text-center pt-9'>
                    <DashboardComponent/>

                   </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default App
