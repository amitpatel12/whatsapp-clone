import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { getMessage, newMessage } from "../../service/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
  
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
  
`;

const Container = styled(Box)`
  padding: 5px 20px;
`;

const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState('')

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id);
      setMessages(data);
      // console.log(data)
    };

    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if(!file){
      message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      }
    }else{
      message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "file",
        text: image,
      }
    };
      // console.log(message)
      await newMessage(message);
      setValue("");
      setFile('')
      setImage('')
      setNewMessageFlag((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container>
              <Message message={message} />
            </Container>
          ))}
      </Component>

      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
