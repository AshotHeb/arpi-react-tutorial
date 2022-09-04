import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import './styles.css'

export const AddNewTask = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        const { target } = e
        const { name, value } = target

        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    }


    return (
        <Form className='add-new-task-form' onSubmit={(event)=>{
            event.preventDefault()
            onSubmit(formData)
        }}>
            <FormGroup className='form-group'>
                <Label for="exampleEmail">
                    Title
                </Label>
                <Input name={'title'} onChange={handleChange} />
            </FormGroup>

            <FormGroup className='form-group'>
                <Label for="exampleEmail">
                    Description
                </Label>
                <Input name={'description'} onChange={handleChange} />
            </FormGroup>

            <Button color="primary">Add New Task</Button>
        </Form>

    )
}