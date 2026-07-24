import { SiteUser } from './site-user.entity';

export const SITE_USER_REPOSITORY = Symbol('SITE_USER_REPOSITORY');

export interface ISiteUserRepository {
  findById(id: string): Promise<SiteUser | null>;
  findByUsername(username: string): Promise<SiteUser | null>;
  create(
    user: Pick<SiteUser, 'email' | 'username' | 'password'>,
  ): Promise<SiteUser>;
}
