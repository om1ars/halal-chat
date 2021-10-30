import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

export const Chat = () => {
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room name</strong></h4>
                    <StarBorderOutlined />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined />Details
                    </p>
                </HeaderRight>
            </Header>
        </ChatContainer>
    )
}


const ChatContainer = styled.div`
flex: .7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
`

const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 12px;border-bottom: 1px solid lightgray;
`
const HeaderRight = styled.div``
const HeaderLeft = styled.div``