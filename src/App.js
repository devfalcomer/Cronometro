import React, { Component } from "react";
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    }
    this.timer = null;
    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);
    this.pause = this.pause.bind(this);
  }

  go() {
    this.timer = setInterval(() => {
      let state = this.state;
      state.numero += 0.1;
      this.setState(state);
    }, 100);
  }

  clean() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0.
    this.setState(state)
  }

  pause() {
    clearInterval(this.timer)
    this.timer = null;
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} alt="cronômetro" className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.go}>START</a>
          <a className="botao" onClick={this.clean}>CLEAN</a>
          <a className="botao" onClick={this.pause}>PAUSE</a>
        </div>
      </div>
    )
  }
}

export default App;