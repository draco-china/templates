import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
