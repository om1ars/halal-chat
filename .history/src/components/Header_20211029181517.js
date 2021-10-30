import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { AccessTime } from "@material-ui/icons";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLEft>
        <HeaderAvata onClick={() => {}} />
        <AccessTime />
      </HeaderLEft>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding
`;

const HeaderLEft = styled.div`
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvata = styled(Avatar)`
cursor: pointer;

:hover { 
    opacity: .8;
}
`;
