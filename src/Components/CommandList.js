import React, { Component } from "react";
import Command from "./Command";
import style from "../Styles/Style";
import AddCommand from "./AddCommand";

class CommandList extends Component {
  render() {
    let commands = this.props.data.map(command => {
      return <Command name={command.Commandname} key={command._id} />;
    });

    return (
      <div style={style.commandList}>
        <table>
          <tbody>
            <tr>
              <th> Command </th>
              <th> Clip </th>
            </tr>
            {commands}
          </tbody>
        </table>
        <AddCommand />
      </div>
    );
  }
}

export default CommandList;
