import express from 'express';
const route = express.Router();

import { addUser } from '../controller/user-controller.js';
import { getUser } from '../controller/user-controller.js';
import { newConversation } from '../controller/conversation-controller.js';


route.post('/add', addUser)
route.get('/users', getUser)

route.post('/conversation/add', newConversation)

export default route