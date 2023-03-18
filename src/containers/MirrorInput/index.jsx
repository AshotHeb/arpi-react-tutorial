import { connect } from 'react-redux'

const MirrorInputFC = ({
    inputValue,
    dispatch
}) => {
    return (
        <div style={{ marginTop: '100px' }}>
            <input type="text"
                onChange={(event) => {
                    dispatch({ type: 'SET_INPUT_VALUE', payload: event.target.value })
                }}
            />
            <div>{inputValue}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export const MirrorInput = connect(mapStateToProps)(MirrorInputFC)