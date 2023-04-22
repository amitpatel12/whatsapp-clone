import {useContext, useState} from 'react'
import { Box } from '@mui/material'

import { AccountContext } from '../../context/AccountProvider'
import styled from '@emotion/styled'

import {Chat as MessageIcon, MoreVert}  from '@mui/icons-material';
import {RotateRight as StatusIcon}  from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../components/drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background-color:#ededed;
    padding:8px 10px;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
margin-left: auto;

& > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
};

&: first-child {
    font-size: 22px;
    margin-left: 8px;
    margin-top: 3px;
}
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
});

const Header = () => {
    const { account } = useContext(AccountContext)
    const [openDrawer, setOpenDrawer] = useState(false)
    // console.log(account)

    const toggleDrawer = () => {
        setOpenDrawer(true);
        console.log(openDrawer)
    }

  return (
    <>
        <Component>
            <Image src={account.picture} alt='dp' onClick={() => toggleDrawer()}/>
        <Wrapper>
            <StatusIcon/>
            <MessageIcon/>
            <HeaderMenu setOpenDrawer = {setOpenDrawer}/>
           
        </Wrapper>

        </Component>

        <InfoDrawer open = {openDrawer} setOpen = {setOpenDrawer}/>
    </>
  )
}

export default Header
