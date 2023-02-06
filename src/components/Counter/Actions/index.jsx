
import { useContext } from 'react'
import './styles.css'
import { CounterContext } from '../../../context'

export const Actions = () => {
    const { plusCounter, minusCounter } = useContext(CounterContext)

    return <div className='counter-actions-wrapper'>
        <button className='counter-actions-button' onClick={plusCounter}>+</button>
        <button className='counter-actions-button' onClick={minusCounter}>-</button>
    </div>
}