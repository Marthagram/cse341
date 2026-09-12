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
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    // 1. CHECK FIRST
    const existingEmail = await Contact.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: 'Email already exists' }); // 409 = Conflict
    }

    // 2. THEN CREATE
    const createContact = await Contact.create({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday
    });

    console.log(createContact);
    res.status(201).json(createContact);
  } catch (err) {
    // 3. Backup: catch mongo duplicate error just in case of race condition
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
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
