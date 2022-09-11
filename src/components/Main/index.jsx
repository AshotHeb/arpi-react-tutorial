
import { useState } from 'react'
import { TaskForm } from '../TaskForm'
import { TodoSection } from '../TodoSection'
import './styles.css'

const damyTodoData = [{
    id: 1,
    title: 'Ticket 1',
    description: 'Ticket 1 description'
},
{
    id: 2,
    title: 'Ticket 2',
    description: 'Ticket 2 description'
},
{
    id: 3,
    title: 'Ticket 3',
    description: 'Ticket 3 description'
}]

export const Main = () => {
    const [todoData, setTodoData] = useState(damyTodoData)
    const [editableTaskData, setEditableTaskData] = useState(null)

    const onAddTask = (formData) => {
        const { title, description } = formData

        const newTask = {
            id: Math.random(),
            title,
            description
        }

        setTodoData(prev => {
            return [
                ...prev,
                newTask
            ]
        })

    }

    const deleteTask = (id) => {
        setTodoData((prev) => prev.filter(task => task.id !== id))
    }

    const onEditDone = (editedTaskData) => {
        setTodoData(prev => prev.map(task => task.id === editedTaskData.id ? editedTaskData : task))
        setEditableTaskData(null)
    }


    return (
        <main className='project-main'>
            <div className='project-forms'>
                <TaskForm onSubmit={onAddTask} />
                {editableTaskData && <TaskForm onSubmit={onEditDone} editableTaskData={editableTaskData} />}
            </div>
            <TodoSection
                todoData={todoData}
                deleteTask={deleteTask}
                setEditableTaskData={setEditableTaskData}
            />
        </main>
    )
}