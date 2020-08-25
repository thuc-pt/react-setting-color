import React, {Component} from 'react';

class Result extends Component {
  render() {
    let txtColor = 'alert alert-' + this.props.curColor
    let txtSize = {fontSize: this.props.curSize};
    return (
      <div>
        <div className="row">
          <div className="col-6"><strong>Current color: </strong>{this.props.curColor.toUpperCase()}</div>
          <div className="col-6"><strong>Current size: </strong>{this.props.curSize}px</div>
        </div>
        <br />
        <div className={txtColor} style={txtSize}><strong>This is content!</strong></div>
      </div>
    );
  }
}

export default Result;