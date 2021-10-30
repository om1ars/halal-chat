import styled  from 'styled-components'
import React from 'react'

export const SidebarOption = ({Icon, title}) => {
    return (
        <SidebarOptionContainer>
            
            {Icon && <Icon fontSize='small' style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <spam>#</spam>{title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}


const SidebarOptionContainer  = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
:hover {
    opacity: .9;
    background-color: #34;
}

`
const SidebarOptionChannel  = styled.div``