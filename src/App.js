import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      step: 1,
      maxVal: 10,
      minVal: 0,
      error: "",
    };
  }

  handleIncrease = () => {
    if (this.state.count < this.state.maxVal) {
      this.setState((prevState) => ({
        count: prevState.count + Number(prevState.step),
      }));
    }
  };

  handleDecrease = () => {
    if (this.state.count > this.state.minVal) {
      this.setState((prevState) => ({
        count: prevState.count - Number(prevState.step),
      }));
    }
  };

  handleReset = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
    this.setState((prevState) => ({
      count: 0,
      step: 1,
      maxVal: 0,
      minVal: 10,
      error:"",
    }));
  };

  handleMinVal = (event) => {
    let validValue = !Number.isNaN(Number(event.target.value));
    if (validValue) {
      this.setState({
        minVal: event.target.value,
        error: "",
      });
    } else {
      this.setState({
        error: "Invaild Data !!!",
      });
    }
  };

  handleMaxVal = (event) => {
    let validValue = !Number.isNaN(Number(event.target.value));
    if (validValue) {
      this.setState({
        maxVal: event.target.value,
        error: "",
      });
    } else {
      this.setState({
        error: "Invaild Data !!!",
      });
    }
  };

  handleStep = (event) => {
    let validValue = !Number.isNaN(Number(event.target.value));
    if (validValue) {
      this.setState({
        step: event.target.value,
        error: "",
      });
    } else {
      this.setState({
        error: "Invaild Data !!!",
      });
    }
  };

  render() {
    return (
      <body>
        <div className="counter-app">
          <div className="button-bar">
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              onClick={this.handleIncrease}
            >
              Increase
            </Button>
            <Button
              variant="outlined"
              s
              ize="medium"
              color="primary"
              onClick={this.handleDecrease}
            >
              Decrease
            </Button>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              onClick={this.handleReset}
            >
              Reset
            </Button>
          </div>
          <div className="counter-value">
            <p>{this.state.count}</p>
          </div>
          <div className="inputs">
            <label>
              <h3>Set Minimum Value</h3>
              <TextField
                id="outlined-basic"
                label="Minimum Value"
                variant="outlined"
                onChange={this.handleMinVal}
              />
            </label>
            <br></br>
            <label>
              <h3>Set Maximum Value</h3>
              <TextField
                id="outlined-basic"
                label="Maximum Value"
                variant="outlined"
                onChange={this.handleMaxVal}
              />
            </label>
            <br></br>
            <label>
              <h3>Set Step</h3>
              <TextField
                id="outlined-basic"
                label="Step"
                variant="outlined"
                onChange={this.handleStep}
              />
              <h4 style={{ color: "red" }}>{this.state.error}</h4>
            </label>
          </div>
        </div>
      </body>
    );
  }
}
