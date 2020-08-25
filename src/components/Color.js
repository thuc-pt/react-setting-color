import React, {Component} from 'react';
import ClassNames from 'classnames';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['danger', 'success', 'info', 'warning', 'primary', 'secondary', 'dark']
    };
  }

  onClickColor(color) {
    this.props.onReceiveColor(color);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">Color setting</div>
        <div className="card-body list-color">
          {this.state.colors.map((color, index) => {
            return <div className={ClassNames("color-picker", color, {active: color === this.props.curColor})} key={index} onClick={() => {this.onClickColor(color)}}></div>
          })}
        </div>
      </div>
    );
  }
}

export default Color;