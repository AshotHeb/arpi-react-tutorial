import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import './styles.css'

export const TaskForm = ({ onSubmit, editableTaskData }) => {
    /* todo useEffect */

    const [formData, setFormData] = useState({
        title: editableTaskData ? editableTaskData.title : '',
        description: editableTaskData ? editableTaskData.description : ''
    })

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
            if (editableTaskData) {
                onSubmit(editableTaskData._id, formData)
            } else {
                onSubmit(formData)
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

            <Button color="primary">  {buttonValue}</Button>
        </Form>

    )
}