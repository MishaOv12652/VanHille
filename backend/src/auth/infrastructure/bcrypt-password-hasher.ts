import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { IPasswordHasher } from '../domain/password-hasher.interface';

const SALT_ROUNDS = 10;

@Injectable()
export class BcryptPasswordHasher implements IPasswordHasher {
  async hash(plain: string): Promise<string> {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return bcrypt.hash(plain, salt);
  }

  compare(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
  }
}
