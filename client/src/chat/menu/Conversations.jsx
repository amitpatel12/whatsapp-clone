import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api";
import { Box, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";
import styled from "@emotion/styled";


const Component = styled(Box)`
height: 81vh;
overflow: overlay;
`

const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background-color: #e9edef;
opacity: 0.5;
`


const Conversations = ({text}) => {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext)

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredUsers = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
      setUsers(filteredUsers);
    };

    fetchData();
  }, [text]);

  return (
    <Component>
      {
        users.map((user, index) => (
          user.sub !== account.sub &&
          <>
            <Conversation user = {user}/>
            <StyledDivider/>
          </>
        ))
      }
     
    </Component>
  );
};

export default Conversations;
