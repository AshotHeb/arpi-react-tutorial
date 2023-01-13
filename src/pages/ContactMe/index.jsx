import {
    contactFormInputs
    // , getFormInitialData 
} from "./helpers"
import "./styles.css"
import { useState } from 'react'

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




    const onChange = (event) => {
        const { name, value } = event.target

        setFormData((prev) => {
            const newFormData = { ...prev }

            newFormData[name] = {
                ...newFormData[name],
                value
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
                    console.log("🚀 ~ formData", formData)
                    setFormData(initialData)
                }}
            >
                {contactFormInputs.map(input => {
                    if (input.type === "textarea") {
                        return <textarea
                            className="contact-input textarea"
                            key={input.name}
                            placeholder={input.placeholder}
                            name={input.name}
                            onChange={onChange}
                            value={formData[input.name].value}
                        />
                    }

                    return <input
                        key={input.name}
                        className="contact-input"
                        placeholder={input.placeholder}
                        type={input.type}
                        name={input.name}
                        onChange={onChange}
                        value={formData[input.name].value}
                    />

                })}

                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}