import styled  from 'styled-components'
import React from 'react'

export const SidebarOption = ({Icon, title}) => {
    return (
        <SidebarOptionContainer>
            
            {Icon && <Icon fontSize='small' style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel></SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}


const SidebarOptionContainer  = styled.div``
const SidebarOptionContainer  = styled.div``