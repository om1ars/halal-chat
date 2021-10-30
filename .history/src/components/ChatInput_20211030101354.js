import styled from "styled-components";
import React from "react";
import { Button } from "@material-ui/core";

export const ChatInput = ({ channelName, channelId }) => {

    const sendMessage = (e) => {
        e.preventDefault()
    }
  return (
    <ChatInputContainer>
      <form action="">
        <input placeholder={`Message #Room`} />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
border-radius: 20px;

> form { 
    position: relative;
    display: flex;
    jut
}
`;
