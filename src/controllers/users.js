import Contact from '../models/users.js';

export async function getUsers(req, res) {
  try {
    const contacts = await Contact.find(); // pulls from 'contacts' collection
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// READ ONE
export async function getUser(req, res) {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// CREATE
export async function createUser(req, res) {
  try {
    const createContact = await Contact.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    });
    const userId = createContact._id; // Get the ID of the newly created contact

    console.log(createContact, userId); // Log the created contact and its ID
    res.status(201).json(userId); // <- only send once
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function updateUser(req, res) {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      },
      { new: true, runValidators: true }
    );
    if (!updatedContact) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// DELETE
export async function deleteUser(req, res) {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
