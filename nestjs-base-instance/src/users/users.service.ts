import { Model, PassportLocalModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: PassportLocalModel<User>) { }
  async findAll(): Promise<User[]> {
    return await this.userModel.find({}, '-_id -__v -password').exec();
  }

