import { Document } from 'mongoose';

export interface User extends Document {
  // 用户名
  readonly username: String;

  // 密码
