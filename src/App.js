import styled from 'styled-components';
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Inscription from './components/Inscription/Inscription';
import Home from './components/Home/Home';



const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {

  const [isConnected, setIsConnected] = useState(false)
  const [tasks, setTasks] = useState([])

  const updateTasks = tasks => {
    setTasks(tasks)
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} updateTasks={updateTasks} />} />
        <Route path="/login" element={<Login isConnected={isConnected} setIsConnected={setIsConnected} />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/logout" element={<Logout isConnected={isConnected} setIsConnected={setIsConnected} updateTasks={updateTasks}/>} />
      </Routes>
    </Container>
  );
}

export default App;
