import styled from 'styled-components'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Task from '../Task/Task'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
`

const TasksList = ({ tasks,deleteTask,updateTasks,checkTask }) => {


    const onDragEnd = result => {
        if (!result.destination) return;
        if (result.source.droppableId === result.destination.droppableId && result.source.index === result.destination.index) return;
        const newTasks = [...tasks]
        const draggedItem = newTasks[result.source.index];

        newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, draggedItem);
        updateTasks(newTasks)
    }


    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="1">
                {
                    provided =>(
                        <Container {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task) => {
                                return(
                                    <Task key={tasks.indexOf(task)} id={tasks.indexOf(task)} task={task} deleteTask={deleteTask} checkTask={checkTask}/>
                                )
                            })}
                            {provided.placeholder}
                        </Container>
                    )
                }
            </Droppable>
        </DragDropContext>
    )
}

export default TasksList;