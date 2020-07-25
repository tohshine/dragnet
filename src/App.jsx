import React,{useEffect,Fragment} from 'react'
import Rellax from 'rellax'
import Index from './components/about'
import Navbar from './components/navbar'
import Task from './components/task'
import Team from './components/team'
import Contact from './components/contact'
import './dist/app.css'
import './dist/style.css'

const App = () => {
    useEffect(() => {
         new Rellax('.rellax')
    }, [])
    return (
        <div className=" flex flex-col justify-center items-center text-gray-700 relax bg-gray-200 " data-rellax-xs-speed="10" data-rellax-xs-speed="0">
            <Navbar/>
            <Index/>
            <Task/>
            <Team/>
            <Contact/>
        </div>
    )
}

export default App
