import React, {Component} from 'react';

class Reset extends Component {
  resetSetting = () => {
    this.props.onReceiveReset();
  }

  render() {
    return <button className="btn btn-danger" onClick={this.resetSetting}>Reset</button>
  }
}

export default Reset;