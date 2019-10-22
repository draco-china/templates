import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  // 用户名
  username: {
    type: String,
    trim: true,
    required: 'UserName is required'
