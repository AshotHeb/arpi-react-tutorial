import { Button, Card as LibCard, CardBody, CardText, CardTitle } from "reactstrap"
import './styles.css'

export const Card = ({ todo, deleteTask, setEditableTaskData, toggleSelectTask, isSelected, onStatusChange }) => {

    const { title, description, _id, date, status } = todo

    return (
        <LibCard
            style={{
                width: '18rem'
            }}
        >
            <div className="check-box" >
                <input
                    className="select-task-checkbox"
                    type="checkbox"
                    onChange={() => toggleSelectTask(todo._id)}
                    checked={isSelected}
                />
            </div>

            <CardBody>
                <CardTitle tag="h5" className="card-title">
                    {title}
                </CardTitle>

                <CardText>
                    {description}
                </CardText>

                <CardText>
                    {date && `Due Date :: ${date.slice(0, 10)}`}
                </CardText>

                <div className={'card-actions-wrapper'}>
                    <Button color="danger" onClick={() => deleteTask(_id)}>
                        Delete
                    </Button>
                    <Button color="warning" onClick={() => setEditableTaskData(todo)}>
                        Edit
                    </Button>

                    <Button color={status==='active'?"primary" : "success"} onClick={() => onStatusChange(_id,status)}>
                        {status === 'active' ? 'Done'  : 'Active'}
                    </Button>
                </div>
            </CardBody>
        </LibCard>
    )
}