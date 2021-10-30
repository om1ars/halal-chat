import styled from "styled-components";
import React from "react";

export const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
};

const MessageContainer = styled.div``;
const MessageInfo = styled.div``;
