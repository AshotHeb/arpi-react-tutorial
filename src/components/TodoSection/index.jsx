import { Card } from "../Card"
import './styles.css'



export const TodoSection = ({ todoData, deleteTask ,setEditableTaskData}) => {
    return (
        <div className="todo-section">
            {todoData.map(todo => {
                return <Card todo={todo} key={todo._id} deleteTask={deleteTask} setEditableTaskData={setEditableTaskData}/>
            })}
        </div>
    )
}