import React, { Component } from "react";

class Command extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <audio controls>
            <source
              src={
                "http://35.231.54.159:8080/audio/" +
                this.props.name.slice(1) +
                ".wav"
              }
              type="audio/wav"
            />
            Audio tag not supported
          </audio>
        </td>
      </tr>
    );
  }
}
export default Command;
