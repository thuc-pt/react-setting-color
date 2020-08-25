import React, {Component} from 'react';

class Size extends Component {
  sendSize(value) {
    this.props.onReceiveSize(value)
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-warning">Size setting</div>
        <div className="card-body">
          <button className="btn btn-success mgr-25" onClick={() => this.sendSize(1)}>Increase</button>
          <button className="btn btn-success" onClick={() => this.sendSize(-1)}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default Size;