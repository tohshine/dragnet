import React,{useEffect} from 'react'
import Rellax from 'rellax'
import Index from './components/about'
import Navbar from './components/navbar'
import Task from './components/task'
import Team from './components/team/team'
import Contact from './components/contact'
import './dist/app.css'
import './dist/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
         new Rellax('.rellax')
         AOS.init({
            duration: 1200
          });
    })
    return (
        <div className=" flex flex-col justify-center items-center text-gray-700 relax bg-gray-200 " >
            <Navbar/>
            <Index/>
            <Task/>
            <Team/>
            <Contact/>
        </div>
    )
}

export default App
