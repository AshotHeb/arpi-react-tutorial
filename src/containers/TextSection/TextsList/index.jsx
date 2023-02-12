import './styles.css'

export const TextsList = ({
    list
}) => {
    return (
        <div className="texts-list-wrapper">
            <ul className="texts-list">
                {list.map(item => <li key={item.id}>{item.text}</li>)}
            </ul>
        </div>
    )
}