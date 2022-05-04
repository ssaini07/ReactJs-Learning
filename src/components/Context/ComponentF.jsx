import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentF extends Component {
  render() {
    return (
      //   <div>ComponentF</div>
      <UserConsumer>
        {(username) => {
          return <div>Hello from {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
