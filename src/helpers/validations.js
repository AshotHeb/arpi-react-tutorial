export const isRequired = (value) => value.length ? undefined : 'This field is required!'

export const minLenghtCheck = (lenght) => (value) => value.length > lenght ? undefined : `Min lenght is ${lenght}`

export const minLenghtCheck3 = minLenghtCheck(3)
export const minLenghtCheck6 = minLenghtCheck(6)

export const maxLenghtCheck = (lenght) => (value) => value.length < lenght ? undefined : `Max lenght is ${lenght}`

export const maxLenghtCheck20 = maxLenghtCheck(20)
export const maxLenghtCheck80 = maxLenghtCheck(80)

export const emailValidation = (value) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
        return undefined
    }

    return `The value must be an email!`
}