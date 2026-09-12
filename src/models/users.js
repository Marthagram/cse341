// models/users.js
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    favoriteColor: { type: String, required: true },
    birthday: { type: Date, required: true }
  },
  { timestamps: true }
); // adds createdAt, updatedAt automatically

const Contact = model('Contact', contactSchema, 'contacts'); // third argument specifies the collection name

export default Contact;
