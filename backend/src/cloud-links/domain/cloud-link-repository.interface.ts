import { CloudLink, CloudLinkEntry } from './cloud-link.entity';

export const CLOUD_LINK_REPOSITORY = Symbol('CLOUD_LINK_REPOSITORY');

export interface ICloudLinkRepository {
  findAll(): Promise<CloudLink[]>;
  findByTableId(tableId: string): Promise<CloudLink | null>;
  create(cloudLink: CloudLink): Promise<CloudLink>;
  addEntry(tableId: string, entry: CloudLinkEntry): Promise<CloudLink | null>;
  removeEntry(tableId: string, entry: CloudLinkEntry): Promise<CloudLink | null>;
  deleteByTableId(tableId: string): Promise<CloudLink | null>;
}
