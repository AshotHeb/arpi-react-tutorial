
import { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../consts'
import { TaskForm } from '../TaskForm'
import { TodoSection } from '../TodoSection'
import './styles.css'

export const Main = () => {
    const [todoData, setTodoData] = useState([])
    const [editableTaskData, setEditableTaskData] = useState(null)

    const onAddTask = (formData) => {
        const { title, description } = formData

        const newTask = {
            title,
            description
        }

        fetch(`${BACKEND_URL}/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then((res) => res.json())
            .then(data => {
                setTodoData(prev => {
                    return [
                        ...prev,
                        data
                    ]
                })
            })




    }

    const deleteTask = (_id) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: 'DELETE'
        })
            .then((data) => {
                setTodoData((prev) => prev.filter(task => task._id !== _id))
            })

    }

    const onEditDone = (_id, editedTaskData) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedTaskData)
        })
            .then(res => res.json())
            .then(data => {
                setTodoData(prev => prev.map(task => {
                    if (task._id === _id) {
                        return data
                    }

                    return task
                }))
            })

        setEditableTaskData(null)
    }

    useEffect(() => {
        fetch(`${BACKEND_URL}/task`)
            .then(res => res.json())
            .then(data => {
                setTodoData(data)
            })
    }, [])


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