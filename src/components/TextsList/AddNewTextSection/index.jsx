import './styles.css'

export const AddNewTextSection = ({ setTextData }) => {
    const handleSubmit = (event) => {

        event.preventDefault()
        const input = event.target[0]
        const value = input.value

        setTextData((prev) => [...prev, value])

        input.value = ''


    }

    return (
        <form className='add-new-text-section' onSubmit={handleSubmit}>
            <input type="text" />
            <button className='add-new-text-btn'>Add</button>
        </form>
    )
}