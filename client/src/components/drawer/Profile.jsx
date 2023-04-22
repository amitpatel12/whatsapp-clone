import { Box, Typography, styled } from '@mui/material'

import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'

const ImageContainer = styled(Box)`
display: flex;
justify-content: center;
`
const Image = styled('img')({
    width: 200,
    height:200,
    borderRadius: '50%',
    padding: '25px 0'
})

const BoxWrapper = styled(Box)`
background: #FFFFFF;
padding: 12px 30px 2px;
box-shadow: 0 2px 3px rgba(0, 0, 0,0.1);


`

const FirstTypo = styled(Typography)`
    font-size:13px;
    color: #009688;
    font-weight:200;
`

const DescriptionContainer = styled(Box)`
padding: 15px 20px 28px 30px;
`

const Profile = () => {
    const {account} = useContext(AccountContext)
  return (
    <>

        <ImageContainer>
            <Image src={account.picture} alt='DP'/>
        </ImageContainer>
        <BoxWrapper>
            <FirstTypo>Your Name</FirstTypo>
            <Typography style={{margin:'14px 0', color:'#4A4A4A'}}>{account.name}</Typography>
        </BoxWrapper>
        <DescriptionContainer>
            <Typography style={{fontSize: '14px', color:'#8696a0'}}>
                This is not your username or pin. This will be visible to your Whatsapp contacts
            </Typography>
        </DescriptionContainer>
        <BoxWrapper>
            <FirstTypo>About</FirstTypo>
            <Typography style={{margin:'14px 0', color:'#4A4A4A'}}>Eat! Sleep! Code! Repeat!</Typography>
        </BoxWrapper>
    
    </>
  )
}

export default Profile
