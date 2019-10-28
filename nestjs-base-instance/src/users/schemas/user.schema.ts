import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  // 用户名
  username: {
    type: String,
    trim: true,
    required: 'UserName is required'
  },

  // 密码
  password: {
    type: String,
    trim: true,
    required: 'Password is required'
  },

  // 邮箱
  email: {
    type: String,
    trim: true,
