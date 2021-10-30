import { Create, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Hey wassap</h2>
          <h3>
            <FiberManualRecord />
            Omar
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  flex: 0.3;
  max-width: 260px;
  margin-top: 60px;
  border-top: 1px solid #49274b;
  color: #f9f9f9;
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
  }
`;
