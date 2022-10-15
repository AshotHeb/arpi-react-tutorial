import { Card } from "../Card"
import './styles.css'



export const TodoSection = ({ todoData, deleteTask, setEditableTaskData, toggleSelectTask,selectedTasks }) => {
    return (
        <div className="todo-section">
            {todoData.map(todo => {
                return <Card
                    todo={todo}
                    key={todo._id}
                    deleteTask={deleteTask}
                    setEditableTaskData={setEditableTaskData} 
                    toggleSelectTask={toggleSelectTask}
                    isSelected={selectedTasks.includes(todo._id)}
                    />
            })}
        </div>
    )
}