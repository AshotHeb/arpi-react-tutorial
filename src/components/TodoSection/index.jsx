import { Card } from "../Card"
import './styles.css'



export const TodoSection = ({ todoData, deleteTask }) => {
    return (
        <div className="todo-section">
            {todoData.map(todo => {
                return <Card todo={todo} key={todo.id} deleteTask={deleteTask}/>
            })}
        </div>
    )
}