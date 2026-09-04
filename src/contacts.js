// This file will contain all of the routing logic for your application

import express from 'express';


// importing individual pages' controller logic
import { getUsers } from './controller/users.js';
import { getUser } from './controller/users.js';



const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);


export default router;