import styled from "styled-components";
import React from "react";

export const Message = ({ message, timestamp, user, userImage }) => {
  return <MessageContainer>

      <img src={user} />
  </MessageContainer>;
};

const MessageContainer = styled.div``;
