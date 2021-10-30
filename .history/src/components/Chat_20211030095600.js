import React from 'react'
import styled from 'styled-components'

export const Chat = () => {
    return (
        <ChatContainer>
            <h1>Hello</h1>
            <Header>
                <HeaderLeft>
                    <h4></h4>
                </HeaderLeft>
                <HeaderRight></HeaderRight>
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

`
const HeaderRight = styled.div``
const HeaderLeft = styled.div``