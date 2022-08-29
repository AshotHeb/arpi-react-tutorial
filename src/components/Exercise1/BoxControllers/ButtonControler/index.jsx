import './styles.css'

export const ButtonControler = (props) => {
    const { value } = props
    return (
        <button className='button-controller'>{value}</button>
    )
}