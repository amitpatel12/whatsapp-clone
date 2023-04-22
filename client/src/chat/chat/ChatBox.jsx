import { Box } from '@mui/material'
import React from 'react'

import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'

// component
import ChatHeader from './ChatHeader'
import Messages from './Messages'

const ChatBox = () => {

  const { person } = useContext(AccountContext)
  return (
    <Box>
      <ChatHeader person= {person}/>
      <Messages person= {person}/>
      
    </Box>
  )
}

export default ChatBox
