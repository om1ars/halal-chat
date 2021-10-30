import { Avatar, AccessTimeIcon } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

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

`;

const HeaderAvata = styled(Avatar)``;
