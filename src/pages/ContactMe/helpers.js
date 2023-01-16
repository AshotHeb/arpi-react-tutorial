import { emailValidation, isRequired, maxLenghtCheck20, maxLenghtCheck80, minLenghtCheck3 } from "../../helpers/validations"

export const contactFormInputs = [
    {
        label: 'Name',
        name: 'name',
        placeholder: "Type your name",
        type: "text",
        validations: [isRequired, minLenghtCheck3, maxLenghtCheck20]
    },
    {
        label: 'Email',
        name: 'email',
        placeholder: "Type your email",
        type: "email",
        validations: [isRequired, emailValidation]
    },
    {
        label: 'Message',
        name: 'message',
        placeholder: "Your Message",
        type: "textarea",
        validations: [isRequired, maxLenghtCheck80]
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

export const getFormInputsValidations = contactFormInputs.reduce((validationsObject, formInput) => {
    validationsObject[formInput.name] = formInput.validations
    return validationsObject
    /*
        {
            name:[validator1,validator2 ,...],
            email:[val1,vla2 .....],
            message:[]
        }
    */
}, {})