import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    background-color: #EFE6EB;
    
`
const InputTodo = styled.input`
    border: solid 2px #DCCFD7;
    border-radius: 8px;
    height: 55%;
    width: 60%;
    padding-left: 5px;
    font-size: 16px;
    font-weight: bold;

    &::placeholder{
        font-weight: normal;
        font-size: 12px;
        font-style: italic;
        color: #B8CBCC;
    }
`

const SubmitTodo = styled.button`
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    color: #fefefe;
    font-size: 13px;
    font-weight: bold;
    background-color: #C84286;
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:active{
        background-color: #882b5a;
    }
`

const AddTask = ( props ) => {
    const addTask = props.addTask;

    const [tache, setTache] = useState('')

    const writeTask = (e) => {
        setTache(e.target.value)
    }

    const checkKeyEnter = (e) => {
        if (e.which === 13){
            submitTask(tache)
        }
    }

    const submitTask = (taskTitle) => {
        const now = new Date()
        if(taskTitle !== ''){
            const newTask = {
                title: taskTitle,
                date: now,
                isChecked: false
            }
            addTask(newTask)
        }
        setTache('')
    }

    return(
        <Container>
            <InputTodo placeholder="Aujourd'hui je fais.." type="text" value={tache} onChange={e => writeTask(e)} onKeyDown={e => checkKeyEnter(e)}/>
            <SubmitTodo onClick={() => submitTask(tache)}>Ajouter</SubmitTodo>
        </Container>
    )
}

export default AddTask;