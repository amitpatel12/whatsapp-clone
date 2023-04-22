import { Box, Typography } from '@mui/material'
import { Search, MoreVert } from '@mui/icons-material'
import React from 'react'
import styled from '@emotion/styled'
import { defaultProfilePicture } from '../../constants/data'

const Header = styled(Box)`
height: 44px;
background-color:#ededed;
padding: 8px 16px;
display: flex;
align-items: center;
`
const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})


const Name = styled(Typography)`
margin-left: 12px !important;
`

const Status = styled(Typography)`
margin-left: 12px !important;
font-size: 12px;
`

const RightComponent = styled(Box)`
margin-left: auto;
& > svg {
    padding:8px;
    font-size:24px;
    color: #000
}
`

const ChatHeader = ({person}) => {
  return (
    <Header>

        <Image src={person.picture} alt ="DP"/>

        <Box>
            <Name>{person.name}</Name>
            <Status>Offline</Status>
        </Box>

        <RightComponent>
            <Search/>
            <MoreVert/>
        </RightComponent>
      
    </Header>
  )
}

export default ChatHeader
