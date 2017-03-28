import React from 'react'
import styled from 'styled-components'
import vars from './variables'

const Page = styled.div`
    position: relative;
    top: ${vars.headerHeight + vars.navbarHeight}px;
    padding-left: ${vars.sidebarWidth}px;
    width: 100%;
    bottom: ${vars.playerHeight}px;
`

export default Page