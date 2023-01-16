import {
    contactFormInputs, getFormInputsValidations
    // , getFormInitialData 
} from "./helpers"
import "./styles.css"
import { useState } from 'react'
import { BACKEND_URL } from '../../consts'


const initialData = {
    name: {
        value: '',
        error: ''
    },
    email: {
        value: '',
        error: ''
    },
    message: {
        value: '',
        error: ''
    }
}

export const ContactMe = () => {
    //jisht lav ancyalov orinak
    // const [formData, setFormData] = useState(getFormInitialData(contactFormInputs))


    //Orinak Arpii hamar
    const [formData, setFormData] = useState(initialData)


    const getError = (value, validations) => {
        // export const isRequired = (value) => value.length ? undefined : 'This field is required!'
        let errorMessage = ''

        for (let i = 0; i < validations.length; i++) {

            const validation = validations[i] // isRequired

            if (validation(value)) {
                errorMessage = validation(value)
                break
            }
        }

        return errorMessage
    }

    const onChange = (event) => {
        const { name, value } = event.target

        const validations = getFormInputsValidations[name]

        const error = getError(value, validations)

        setFormData((prev) => {
            const newFormData = { ...prev }

            newFormData[name] = {
                ...newFormData[name],
                value,
                error
            }

            return newFormData
        })

    }

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>

            <form
                className="contact-form"
                onSubmit={(event) => {
                    event.preventDefault()

                    fetch(`${BACKEND_URL}/form`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: formData.email.value,
                            name: formData.name.value,
                            message: formData.message.value
                        })
                    })
                        .then(res => res.json())
                        .then(() => {
                            setFormData(initialData)
                        })

                }}
            >
                {contactFormInputs.map(input => {
                    const { error, value } = formData[input.name]

                    if (input.type === "textarea") {
                        return <div key={input.name} className="input-box">
                            <textarea
                                className="contact-input textarea"
                                placeholder={input.placeholder}
                                name={input.name}
                                onChange={onChange}
                                value={value}
                            />
                            {error ? <span className="input-error-message">{error}</span> : null}
                        </div>
                    }

                    return <div key={input.name} className="input-box">
                        <input
                            className="contact-input"
                            placeholder={input.placeholder}
                            type={input.type}
                            name={input.name}
                            onChange={onChange}
                            value={value}
                        />
                        {error ? <span className="input-error-message">{error}</span> : null}
                    </div>

                })}

                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}