import React from "react";
class SquerRotate extends React.Component{

state={
    isRotated:false
}

handleStart=()=>{
this.setState({
    isRotated:true
})
    }
render(){
    this.state.isStart?"Sqr2":"Sqr1"
    return(
    <>  
       <div className="wrapper">
        <div className="Sqr1"></div>
        <button onClick={this.handleStart}>Start</button>
        <div className="Sqr2"></div>
        </div>
        </>
    )
}
}
export default SquerRotate; 







