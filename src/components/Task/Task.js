import styled from 'styled-components'
import { Draggable } from "react-beautiful-dnd";
import Checkbox from '../SubComponents/Checkbox'

const TaskContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    height: 60px;
    background-color: #fefefe;
    box-shadow: ${props => props.isChecked ? "0px 4px 6px 0px rgb(198, 66, 134)" : "0px 2px 4px 0px rgba(0, 0, 0, 0.5)" };
    margin-top: 20px;
    position: relative;
    padding-left: 10px;
    border-radius: 10px;
`
const DeleteButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 2%;
    border: none;
    color: #fefefe;
    background-color: #dc3545;
    border-radius: 5px;
    width: 30px;
    height: 30px;
`

const Title = styled.div`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 20ch;
    color: #587172;
`

const Date = styled.div`
    font-size: 13px;
    font-style: italic;
    color: #B8CBCC;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 60%;
`

const Task = ({ id,task,deleteTask,checkTask }) => {
    const t = task || {};
    const title = task.title || 'titre par defaut';
    const date = task.date.toLocaleDateString([], { day: 'numeric', month: 'numeric' }) || 'date par defaut';
    const time = task.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) || 'heure par defaut';
    const isChecked = task.isChecked || false

    return(
        <Draggable key={id} draggableId={id.toString()} index={id}>
            {provided => (
            <TaskContainer isChecked={isChecked} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Column>
                    <Title>{title}</Title>
                    <Date>{`ajouté le ${date} à ${time}`}</Date>
                </Column>
                <Checkbox isChecked={isChecked} checkTask={checkTask} task={t}/>
                <DeleteButton onClick={() => deleteTask(t)}>X</DeleteButton>
            </TaskContainer>
            )}
        </Draggable>
    )
}

export default Task