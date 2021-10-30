import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { db } from "../firebase/firebase";
import firebase from "firebase";

export const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Omar",
      userImage:
        "data:image/png;base64,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",
    });
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #Room`}
        />
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
