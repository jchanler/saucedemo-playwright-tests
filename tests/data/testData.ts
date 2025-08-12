import dotenv from 'dotenv';
import path from 'path';

// Ensure dotenv is loaded in test context with explicit path
dotenv.config({ path: path.join(process.cwd(), '.env') });

export const TestUsers = {
  STANDARD_USER: {
    username: process.env.STANDARD_USER,
    password: process.env.STANDARD_PASSWORD
  },
  LOCKED_OUT_USER: {
    username: process.env.LOCKED_OUT_USER,
    password: process.env.LOCKED_OUT_PASSWORD
  },
  PROBLEM_USER: {
    username: process.env.PROBLEM_USER,
    password: process.env.PROBLEM_PASSWORD
  }
};