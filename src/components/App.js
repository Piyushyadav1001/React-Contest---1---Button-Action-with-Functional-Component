import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: false
    };
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick() {
    this.setState({
      clicks: true
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.btnClick}>
          click
        </button>
        {this.state.clicks ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
