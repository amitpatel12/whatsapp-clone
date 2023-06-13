import React, { useEffect, useState } from "react";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";
import { uploadFile } from "../../service/api";

const Container = styled(Box)`
  height: 55px;
  background-color: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;

  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
background-color: #FFFFFF;
border-radius:18px;
width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
width: 100%;
padding: 2px 14px;
// height: 20px;
// padding: 20px;


`

const ClipIcon = styled(AttachFile)`
transform: rotate(40deg);
cursor: pointer;

`
 
const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {

  useEffect(() => {
    const getImage = async() => {
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        
        let response = await uploadFile(data)
        setImage(response.data)
        console.log(response)
      
      
      }
    }
    getImage()
  }, [file])

  const onFileChange = (e) => {
    setFile(e.target.files[0])
    setValue(e.target.files[0].name)
  }
 
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        style={{display: 'none'}}
        id= 'fileInput'
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField placeholder="Type a message" 
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
