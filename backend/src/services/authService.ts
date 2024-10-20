import bcrypt from 'bcrypt';
import { getUserByEmail, createUser, updateVerificationStatus } from '../models/userModel'; // Import the function here
import { sendVerificationEmail } from './resendService';
import { v4 as uuidv4 } from 'uuid'; 

export const registerUser = async (username: string, email: string, password: string) => {
  const userExists = await getUserByEmail(email);
  if (userExists) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationCode = uuidv4(); // Generate verification code

  const user = await createUser(username, email, hashedPassword, verificationCode);

  // Send verification email
  await sendVerificationEmail(email, verificationCode);

  return user;
};

export const verifyUserCode = async (email: string, code: string) => {
  const user = await getUserByEmail(email);
  if (!user) throw new Error('User not found');

  if (user.verification_code !== code) {
    throw new Error('Invalid verification code');
  }

  // Update user status to verified
  await updateVerificationStatus(email); // Ensure this function is defined and imported

  return 'User verified successfully';
};
