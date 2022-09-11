import { Button, Card as LibCard, CardBody, CardText, CardTitle } from "reactstrap"
import './styles.css'

export const Card = ({ todo ,deleteTask,setEditableTaskData}) => {

    const { title, description, id } = todo
    
    return (
        <LibCard
            style={{
                width: '18rem'
            }}
        >
            <CardBody>
                <CardTitle tag="h5" className="card-title">
                    {title}
                </CardTitle>

                <CardText>
                    {description}
                </CardText>

                <div className={'card-actions-wrapper'}>
                    <Button color="danger" onClick={()=>deleteTask(id)}>
                        Delete
                    </Button>
                    <Button  color="warning" onClick={()=>setEditableTaskData(todo)}>
                        Edit
                    </Button>
                </div>
            </CardBody>
        </LibCard>
    )
}