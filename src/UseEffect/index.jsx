import { useEffect, useState } from "react"
import { Counter } from "./Counter"

export const UseEffect = () => {

    const [inputValue, setInputValue] = useState('')
    const [isCounter, setIsCounter] = useState(true)

    const [list, setList] = useState([{
        id: Math.random(),
        title: 'Barev'
    }])

    const onChange = (event) => {
        const target = event.target
        const value = target.value
        setInputValue(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newText = {
            id: Math.random(),
            title: inputValue
        }

        setList(prev => [...prev, newText])
    }

    const toggleShowCounter = () => {
        setIsCounter(!isCounter)
    }

    // useEffect(() => {
    //     console.log('1.Mounting Ended')
    // }, [])

    // useEffect(() => {
    //     console.log('2.Updating Ended')
    // })

    // useEffect(() => {
    //     console.log('new inputValue ' + inputValue)

    // }, [inputValue])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setList((prev)=>[...prev,...data])
            })
    }, [])

    return (
        <div>
            <button onClick={toggleShowCounter}>
                {isCounter ? 'Hide Counter' : 'Show Counter'}
            </button>

            {isCounter ? <Counter /> : null}

            <div style={{ marginTop: '100px' }}>
                <form onSubmit={onSubmit}>
                    <input type="text" value={inputValue} onChange={onChange} />
                    <button>Add new Text</button>
                </form>

                <div style={{ marginTop: '100px' }}>
                    {list.map(item => <p key={item.id}>{item.title}</p>)}
                </div>
            </div>
        </div>
    )
}