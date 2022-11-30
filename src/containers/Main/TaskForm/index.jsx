import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import DatePicker from 'react-datepicker'
import './styles.css'

export const TaskForm = ({ onSubmit, editableTaskData }) => {
    /* todo useEffect */

    const [formData, setFormData] = useState({
        title: editableTaskData ? editableTaskData.title : '',
        description: editableTaskData ? editableTaskData.description : '',
    })

    const [todoDate, setTodoDate] = useState(editableTaskData?.date
        ? new Date(editableTaskData.date) :
        new Date()
    );

    const handleChange = (e) => {
        const { target } = e
        const { name, value } = target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const buttonValue = editableTaskData ? 'Edit Task' : 'Add New Task'

    return (
        <Form className='task-form' onSubmit={(event) => {
            event.preventDefault()

            const body = {
                ...formData,
                date: todoDate.toISOString().slice(0, 10)
            }

            if (editableTaskData) {
                onSubmit(editableTaskData._id, body)
            } else {
                onSubmit(body)
            }

            setFormData({
                title: '',
                description: ''
            })
        }}>
            <FormGroup className='form-group'>
                <Label for="exampleEmail">
                    Title
                </Label>
                <Input name={'title'} onChange={handleChange} value={formData.title} />
            </FormGroup>

            <FormGroup className='form-group'>
                <Label for="exampleEmail">
                    Description
                </Label>
                <Input name={'description'} onChange={handleChange} value={formData.description} />
            </FormGroup>

            <div>
                <DatePicker selected={todoDate} onChange={(date) => setTodoDate(date)} />
            </div>

            <Button color="primary" style={{
                marginTop: '16px'
            }}>
                {buttonValue}
            </Button>
        </Form>

    )
}