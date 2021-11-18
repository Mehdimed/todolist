import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddTask from '../AddTask/AddTask';
import Layout from '../Layout/Layout';
import TopTime from '../TopTime/TopTime'
import TasksList from '../TasksList/TasksList'



const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = ({tasks, setTasks, updateTasks}) => {

  const getFalseData = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok){
      return response.json();
    }
  }

  useEffect(() => {
    if(sessionStorage.getItem('is-authenticated')){
      getFalseData('/myTasks')
        .then(data => updateTasks(data.tasks))
    }
    
  }, [])

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

export default Home;
