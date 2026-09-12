// This file will contain all of the routing logic for your application

import express from 'express';

// importing individual pages' controller logic
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.js';

const contactRouter = express.Router();
contactRouter.get('/', getUsers);
contactRouter.get('/:id', getUser);
contactRouter.post('/', createUser);
contactRouter.put('/:id', updateUser);
contactRouter.delete('/:id', deleteUser);

export default contactRouter;
