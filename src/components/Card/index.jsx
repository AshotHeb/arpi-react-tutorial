import { Button, Card as LibCard, CardBody, CardText, CardTitle } from "reactstrap"
import './styles.css'

export const Card = ({ todo: { title, description, _id } }) => {
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
                    <Button color="danger" >
                        Delete
                    </Button>
                    <Button  color="warning">
                        Edit
                    </Button>
                </div>
            </CardBody>
        </LibCard>
    )
}