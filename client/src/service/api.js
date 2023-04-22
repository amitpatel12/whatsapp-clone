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