import styled from "styled-components";
import React from "react";

export const Message = ({ message, timestamp, user, userImage }) => {

    console.log(message);
  return (
    <MessageContainer>
      <img src={userImage} />
    </MessageContainer>
  );
};

const MessageContainer = styled.div``;
