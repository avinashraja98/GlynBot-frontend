import React, { Component } from "react";
import axios from "axios";

class AddCommand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      commandName: "",
      valid: false,
      uploadStatus: false
    };

    this.addCommand = this.addCommand.bind(this);
    this.cancel = this.cancel.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.file.files[0]);
    data.append("CommandName", this.CommandName.value);

    console.log(data);

    axios
      .post("http://35.231.54.159:8080/addcommand", data)
      .then(function(res) {
        console.log("yes" + res.body);
        window.location.reload();
      })
      .catch(function(error) {
        console.log(error);
        alert(error + "\n Command Exists or File too big!");
      });
  }

  addCommand() {
    this.setState({ pressed: true });
  }

  cancel() {
    this.setState({ pressed: false });
  }

  validateForm(e) {
    let regex = new RegExp(/^[a-zA-Z0-9_-]{3,15}$/);
    this.setState({ valid: regex.test(e.target.value) });
    this.setState({ commandName: e.target.value });
  }

  render() {
    if (this.state.pressed) {
      return (
        <form onSubmit={this.handleUpload}>
          Command Name:{" "}
          <input
            type="text"
            onChange={this.validateForm}
            value={this.state.commandName}
            name="CommandName"
            required
            requiredError="Command name is required."
            ref={ref => {
              this.CommandName = ref;
            }}
          />
          <br />
          <input
            type="file"
            id="file"
            name="Filename"
            required
            ref={ref => {
              this.file = ref;
            }}
          />
          <br />
          <input
            type="submit"
            value="Add Command"
            disabled={!this.state.valid}
          />
          <br />
          <button onClick={this.cancel}>Cancel</button>
        </form>
      );
    } else {
      return <button onClick={this.addCommand}> Add Clip</button>;
    }
  }
}

export default AddCommand;
