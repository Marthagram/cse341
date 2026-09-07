import Contact from '../models/users.js';

export async function getUsers(req, res) {
  try {
    const contacts = await Contact.find() // pulls from 'contacts' collection
    res.status(200).json(contacts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// READ ONE
export async function getUser(req, res) {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    res.json(contact)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}