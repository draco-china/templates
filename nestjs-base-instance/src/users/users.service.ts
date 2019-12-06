import { Model, PassportLocalModel } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/createUser.dto';

