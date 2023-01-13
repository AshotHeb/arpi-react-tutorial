export const contactFormInputs = [
    {
        label: 'Name',
        name: 'name',
        placeholder: "Type your name",
        type: "text"
    },
    {
        label: 'Email',
        name: 'email',
        placeholder: "Type your email",
        type: "email"
    },
    {
        label: 'Message',
        name: 'message',
        placeholder: "Your Message",
        type: "textarea"
    }
]

export const getFormInitialData = (formInputs) => {
    return formInputs.reduce((initialData, input) => {
        initialData[input.name] = {
            value: '',
            error: ''
        }

        return initialData
    }, {})
}