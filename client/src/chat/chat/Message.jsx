import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { formatDate, downloadMedia } from '../../utils/common-utils'
import { AccountContext } from '../../context/AccountProvider'
import GetAppIcon from '@mui/icons-material/GetApp';

const Own = styled(Box)`
background: #dcf8c6;
max-width:60%;
margin-left: auto;
width: fit-content;
padding: 5px;
display: flex;
border-radius: 5px;
word-break: break-word;
margin-top: 5px;
`

const Wrapper = styled(Box)`
background: #FFFFFF;
max-width:60%;
width: fit-content;
padding: 5px;
display: flex;
border-radius: 5px;
word-break: break-word;
margin: 5px 0;

`



const Text = styled(Typography)`
font-size: 14px;
padding: 0 25px 0 5px;
`

const Time = styled(Typography)`
font-size: 10px;
color: #919191;
// margin-top: 6px;

word-break: keep-all;

`
const Message = ({ message }) => {

    const { account } = useContext(AccountContext)
  return (
    <>
     {
        account.sub === message.senderId ? 
        (
            <Own>
                {
                    message.type === 'file' ? <ImageMessage message={message}/>: <TextMessage message={message}/>
                }
                
            </Own>
        ) : 
        (
            <Wrapper>
                {
                    message.type === 'file' ? <ImageMessage message={message}/>: <TextMessage message={message}/>
                }
            </Wrapper>
        )
     }

    </>
  )
}

const ImageMessage = ({ message}) => {
    return (
        <Box style={{position:'relative'}}>
            {
                message?.text?.includes('.pdf') ? 
                <Box></Box>
                :
                <img src={message.text} alt={message.text} style={{maxWidth: '400px', height:'100%', objectFit:'cover'}}/>
            }
            <Time style={{position:'absolute',bottom:'0px', right:0, }}>
                <GetAppIcon
                    onClick={(e) => downloadMedia(e, message.text)} 
                    style={{marginRight: 10, border: '1px solid gray', borderRadius: '50%', cursor: 'pointer'}}
                    fontSize='small'
                />
                {formatDate(message.createdAt)}  
            </Time>
        </Box>
    )
}

const TextMessage = ({message}) =>{
    return (
        <>
            <Text>{message.text}</Text>
             <Time>{formatDate(message.createdAt)}  </Time>
        </>
    )
}

export default Message
