import './styles.css'

export const List = ({ textData ,setTextData}) => {
   
    // const listJSX = [<p className="list-item">  {textData[0]}</p>, <p className="list-item">  {textData[1]}</p>]
    return (
        <div className='list'>
            {textData.map((text,index) => {
                return <p className="list-item" key={index}>
                    {text}
     
                </p>
            })}
        </div>
    )
}