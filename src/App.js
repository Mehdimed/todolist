import { useState } from 'react';
import styled from 'styled-components';
import AddTask from './components/AddTask/AddTask';
import Layout from './components/Layout/Layout';
import TopTime from './components/TopTime/TopTime'
import TasksList from './components/TasksList/TasksList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    const newTasks = [...tasks,task]
    setTasks(newTasks)
  }

  const deleteTask = (task) => {
    let tasksCopy = [...tasks]
    const taskToDeleteIndex = tasks.findIndex(t => t === task)
    tasksCopy.splice(taskToDeleteIndex, 1);
    setTasks(tasksCopy)

  }

  const updateTasks = tasks => {
    setTasks(tasks)
  }

  const checkTask = (task) => {
    let tasksCopy = [...tasks]
    const taskToCheckIndex = tasks.findIndex(t => t === task)
    tasksCopy[taskToCheckIndex].isChecked = !tasksCopy[taskToCheckIndex].isChecked;
    setTasks(tasksCopy)
  }

  return (
    <Container>
      <Layout>
        <TopTime/>
        <AddTask addTask={addTask}/>
        <TasksList tasks={tasks} deleteTask={deleteTask} updateTasks={updateTasks} checkTask={checkTask}/>
      </Layout>
    </Container>
  );
}

export default App;
