import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    phoneNumber: { type: String, trim: true },
    dateOfBirth: { type: Date },
    address: {
      country: { type: String, trim: true },
      region: { type: String, trim: true },
      city: { type: String, trim: true },
      postalCode: { type: String, trim: true },
      street: { type: String, trim: true },
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
