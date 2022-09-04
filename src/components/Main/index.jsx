
import { useState } from 'react'
import { AddNewTask } from '../AddNewTask'
import { TodoSection } from '../TodoSection'
import './styles.css'

const damyTodoData = [{
    _id: 1,
    title: 'Ticket 1',
    description: 'Ticket 1 description'
},
{
    _id: 2,
    title: 'Ticket 2',
    description: 'Ticket 2 description'
},
{
    _id: 3,
    title: 'Ticket 3',
    description: 'Ticket 3 description'
}]

export const Main = () => {
    const [todoData, setTodoData] = useState(damyTodoData)

    const onAddTask = (formData) => {
        const { title, description } = formData

        const newTask  ={
            _id:Math.random(),
            title,
            description
        }

        setTodoData(prev=>{
            return  [
                ...prev,
                newTask
            ]
        })

    }
    

    return (
        <main className='project-main'>
            <AddNewTask onSubmit={onAddTask} />

            <TodoSection todoData={todoData} />
        </main>
    )
}