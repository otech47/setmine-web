import React from 'react'
import styled from 'styled-components'
import config from './config'

const Page = styled.div`
    position: relative;
    top: ${config.headerHeight + config.navbarHeight}px;
    padding-left: ${config.sidebarWidth}px;
    width: 100%;
    bottom: ${config.playerHeight}px;
`

export default Page