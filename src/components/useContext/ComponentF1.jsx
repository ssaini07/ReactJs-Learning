import React, { Component } from "react";
import { UserContext } from "../../App";
import { ChannelContext } from "../../App";

function ComponentF1() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user} and Channel context value{" "}
                    {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF1;
