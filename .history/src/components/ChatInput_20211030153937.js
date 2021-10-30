import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { db } from "../firebase/firebase";
import firebase from "firebase";

export const ChatInput = ({ channelName, channelId, chtref }) => {
  console.log("this is channel ikd", channelId);
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Omar",
      userImage:
        "https://i.picsum.photos/id/617/200/200.jpg?hmac=hA4FoiLXjwqHcRxZZSlEI_ruilvP8o_m7FsJ-JD4t4I",
    });

    chtref?.current?.scroolIntoView({
        
    })

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
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
