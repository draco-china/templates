import { Controller, UseGuards, HttpStatus, Response, Request, Get, Post, Body, Put, Param, Delete, Headers } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
// import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './interface/user.interface'

