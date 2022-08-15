import React from "react";
class SquerRotate extends React.Component {

    state = {
        isRotated: false
    }

    handleStart = () => {
        this.setState({
            isRotated: true
        })
    }

    handleRevert = () => {
        this.setState({
            isRotated: false
        })
    }

    render() {
        const classname = this.state.isRotated ? "Sqr2 active" : "Sqr2"
        const text = this.state.isRotated ? 'Revert' : 'Start'
        const handler = this.state.isRotated ? this.handleRevert : this.handleStart

        return (
            <>
                <div className="wrapper">
                    <div className="Sqr1"></div>
                    <button onClick={handler}>{text}</button>
                    <div className={classname}></div>
                </div>
            </>
        )
    }
}
export default SquerRotate;







