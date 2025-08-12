import dotenv from 'dotenv';

// Ensure dotenv is loaded in test context
dotenv.config();

export const TestUsers = {
  STANDARD_USER: {
    username: process.env.STANDARD_USER || 'standard_user',
    password: process.env.STANDARD_PASSWORD || 'secret_sauce'
  },
  LOCKED_OUT_USER: {
    username: process.env.LOCKED_OUT_USER || 'locked_out_user',
    password: process.env.LOCKED_OUT_PASSWORD || 'secret_sauce'
  },
  PROBLEM_USER: {
    username: process.env.PROBLEM_USER || 'problem_user',
    password: process.env.PROBLEM_PASSWORD || 'secret_sauce'
  }
};