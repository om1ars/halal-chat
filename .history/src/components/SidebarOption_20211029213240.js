import styled  from 'styled-components'
import React from 'react'

export const SidebarOption = ({Icon, title}) => {
    return (
        <SidebarOptionContainer>
            
            {Icon && <Icon fontSize='small' />}
        </SidebarOptionContainer>
    )
}


const SidebarOptionContainer  = styled.div``