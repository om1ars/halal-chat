import styled from "styled-components";
import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import { db } from "../firebase/firebase";

export const ChatInput = ({ channelName, channelId }) => {

    const inputRef = useRef(null)
  const sendMessage = (e) => {
    e.preventDefault();

    if(channelId){
        return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
        
    })
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input ref={inputRef} placeholder={`Message #Room`} />
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
    justify-content: center;
  }
  > form > input {
    position: fixed;
    border-radius: 3px;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
