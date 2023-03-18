import { connect } from 'react-redux'

const CounterFC = ({
    dispatch,
    counter
}) => {
    return (
        <div >
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT_COUNTER" })
                }}>
                +
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "DECREMENT_COUNTER", })
                }}>
                -
            </button>
            <div>
                {counter}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export const Counter = connect(mapStateToProps)(CounterFC)