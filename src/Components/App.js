import React, { Component } from "react";
import CommandList from "./CommandList";
import style from "../Styles/Style";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getCommands = this.getCommands.bind(this);
  }

  getCommands() {
    console.log("getting");
    axios.get("http://35.231.54.159:8080/commands").then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }
  componentDidMount() {
    this.getCommands();
  }
  render() {
    return (
      <div style={style.app}>
        <h1> GlynBot SoundBoard </h1>
        <CommandList data={this.state.data} />
      </div>
    );
  }
}

export default App;
