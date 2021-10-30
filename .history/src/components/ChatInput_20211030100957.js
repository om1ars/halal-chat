import  styled  from 'styled-components'
import React from 'react'

export const ChatInput = () => {
    return (
        <ChatInputContainer>
            <form action=''>
                <input placeholder={`Message #${}`} />
            </form>
        </ChatInputContainer>
    )
}


const ChatInputContainer = styled.div``