import * as React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

import { Dashboard, Home, About } from './pages/index'
import { DashboardMessage, DashboardTask, DashboardChat} from './components/index'

/*
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Home from './pages/Home'

import DashboardMessage from './components/DashboardMessage'
import DashboardTask from './components/DashboardTask'
import DashboardChat from './components/DashboardChat'
*/

function App() {
    
    //const [id, setId] = React.useState(0);
    
    const getRandomId =()=> {
        const arr = [2,4,6,8,13,23,25,34,53,62,64,74,234,298];
        const index = Math.floor(Math.random() * arr.length);
        return arr[index] 
    }

    return (
        <div className="text-center p-0 m-0">

        
            <h1 className="">hi React, welcome to react latest tutorials</h1>

            <nav className="nav">
                <div className="container">
                    <div className="logo"></div>
                    <div class="bg-green-300">
                        <span className="m-20"><Link to="/">Home</Link></span>
                        <span className="m-20"><Link to="/about">About</Link></span>
                        <span className="m-20"><Link to="/dashboard">Dashbaord</Link></span>
                        <br/>
                        <span className="m-20"><Link to="/dashboard/chat">Dashbaord Chat</Link></span>
                        <span className="m-20"><Link to="/dashboard/task">Dashbaord Task</Link></span>
                        <span className="m-20"><Link to="/dashboard/message">Dashbaord Message</Link></span>
                        <span className="m-20"><Link to={`/dashboard/message/${getRandomId()}`}>Dashbaord Message pick</Link></span>

                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} >
                    <Route path="message" element={<DashboardMessage />} />
                    <Route path="message/:msgId" element={<DashboardMessage />} />
                    <Route path="task" element={<DashboardTask />} />
                    <Route path="chat" element={<DashboardChat />} />
                </Route>
            </Routes>

            <Outlet />
        </div>
    );
}

export default App;
