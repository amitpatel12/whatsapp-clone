import axios from 'axios'

const url = 'http://localhost:8000'

export const addUser = async (data) => {
    try {
        const result = await axios.post(`${url}/add`, data);
        // console.log(result)
    } catch (error) {
        console.log('Error while adding user api', error.message)
    }
}


export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        console.log(response)
        return response.data;
        
    } catch (error) {
        console.log('Error while getting users', error.message)
    }
}


export const setConversation = async (data) => {
    try {
        console.log(data)
        await axios.post(`${url}/conversation/add`, data);
        
    } catch (error) {
         console.log('Error while getting users', error.message)
    }
}


export const getConversation = async (data) => {
    try {
        console.log(data)
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
        
    } catch (error) { 
         console.log('Error while calling getConversation', error.message)
    }
}

export const newMessage = async (data) => {
    try {
        console.log(data)
        let response = await axios.post(`${url}/message/add`, data);
        return response.data;
        
    } catch (error) { 
         console.log('Error while calling getConversation', error.message)
    }
}


export const getMessage = async (id) => {
    try {
        // console.log("id",id)
        const response = await axios.get(`${url}/message/get/${id}`)
        return response.data;
        
    } catch (error) {
        console.log('Error while calling getMessage', error.message)
    }
}

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${url}/file/upload`, data);

        // const response = await axios.post(`${url}/file/upload`, data)
        return response;

    } catch (error) {
        console.log('Error while calling uploadFile', error.message)
    }
}