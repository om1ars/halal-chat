import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { AccessTime } from "@material-ui/icons";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLEft>
        <HeaderAvata 

        onClick={() => {}}
        />
        <AccessTimeIcon />
      </HeaderLEft>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`

display: flex;
`;

const HeaderLEft = styled.div`
flex: .3;
align-items: center;
margin-left: 20px;
`;

const HeaderAvata = styled(Avatar)``;
