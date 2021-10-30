import { Avatar, AccessTimeIcon } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLEft>
        <HeaderAvata 

        onClick={() => {}}
        />
        < />
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
