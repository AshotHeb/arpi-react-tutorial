import { Card } from "../../../components/Card"
import './styles.css'



export const TodoSection = ({ todoData, deleteTask, setEditableTaskData, toggleSelectTask, selectedTasks, onStatusChange }) => {
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
                    onStatusChange={onStatusChange}
                />
            })}
        </div>
    )
}