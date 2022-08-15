
import React from 'react';

/*export const MirrorInput=()=>{
    return(
        <input type="text" className="mirror-input"/>
        <p>Par</p>
    </div>)

}*/

class MirrorInput extends React.Component {
  state = {
    inputvalue: ""
  }
  handleChange = (e) => {
    const { value } = e.target
    this.setState({ inputvalue: value })
  }

  render() {
    return (
      <div className="Mirror-input -wrapper">
        <input type="text" className={"Mirror-input-text"} onChange={this.handleChange} />
        <p>{this.state.inputvalue}</p>
      </div>
    )
  }
}
export default MirrorInput;