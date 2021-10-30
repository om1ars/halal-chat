import { FiberManualRecord } from "@material-ui/icons";
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
          </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div``;
const SidebarHeader = styled.div``;
const SidebarInfo = styled.div``;
