import {getAllUsers} from '../models/users.js';
import {getUserById} from '../models/users.js';

export async function getUsers(req, res) {
    try{
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export async function getUser(req, res){
      const id = req.params.id;
      const user = await getUserById(id);
      res.json(user);
}