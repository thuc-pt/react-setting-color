import React, {Component} from 'react';
import './App.css';
import Color from './components/Color';
import Size from './components/Size';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'danger',
      currentSize: 16
    };
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onResetPage = this.onResetPage.bind(this);
  }

  onChangeColor(color) {
    this.setState({
      currentColor: color
    });
  }

  onChangeSize(value) {
    this.setState({
      currentSize: (this.state.currentSize + value >= 16 && this.state.currentSize + value <= 24) ? this.state.currentSize + value : this.state.currentSize
    });
  }

  onResetPage() {
    this.setState({
      currentColor: 'danger',
      currentSize: 16
    });
  }

  render() {
    return (
      <div className="mgt-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Color curColor={this.state.currentColor} onReceiveColor={this.onChangeColor} />
            </div>
            <div className="col-6">
              <Size curSize={this.state.currentSize} onReceiveSize={this.onChangeSize} />
              <br />
              <Reset onReceiveReset={this.onResetPage} />
            </div>
          </div>
          <br />
          <Result curColor={this.state.currentColor} curSize={this.state.currentSize} />
        </div>
      </div>
    );
  }
}

export default App;
