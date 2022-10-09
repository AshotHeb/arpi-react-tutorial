import './styles.css'

export const Post = ({title,description})=>{
    return (
        <div className='post-container'>
            <p>Title :: {title}</p>
            <p>Description :: {description}</p>
        </div>
    )
}