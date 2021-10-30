import {
    Add,
  Apps,
  Bookmark,
  Comment,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  People,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { SidebarOption } from "./SidebarOption";

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
      <SidebarOption Icon={Comment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Meantions and reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={Bookmark} title="Channel browser" />
      <SidebarOption Icon={People} title="People and user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />

      <hr />
      <SidebarOption Icon={ExpandMore} title="Show more" />

      <hr />
      <SidebarOption Icon={Add} addChangeOption title="Add channel" />

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

  > hr
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
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
