import { Controller, UseGuards, HttpStatus, Response, Request, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UsersService } from '@/users/users.service';
import { CreateUserDto } from '@/users/dto/createUser.dto';
import { LoginUserDto } from '@/users/dto/loginUser.dto';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) { }

  @Post('signup')
  public async signUp(@Response() res, @Body() user: CreateUserDto) {
    const result = await this.usersService.create(user);
    if (!result) {
      return res.status(HttpStatus.BAD_REQUEST).json(result);
