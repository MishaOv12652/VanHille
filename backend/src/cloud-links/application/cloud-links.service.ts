import { Inject, Injectable } from '@nestjs/common';
import { CloudLink, CloudLinkEntry } from '../domain/cloud-link.entity';
import {
  CLOUD_LINK_REPOSITORY,
  ICloudLinkRepository,
} from '../domain/cloud-link-repository.interface';

@Injectable()
export class CloudLinksService {
  constructor(
    @Inject(CLOUD_LINK_REPOSITORY)
    private readonly cloudLinkRepository: ICloudLinkRepository,
  ) {}

  getAllCloudLinkTables(): Promise<CloudLink[]> {
    return this.cloudLinkRepository.findAll();
  }

  getCloudLinkByTableId(tableId: string): Promise<CloudLink | null> {
    return this.cloudLinkRepository.findByTableId(tableId);
  }

  addCloudLinkTable(cloudLink: CloudLink): Promise<CloudLink> {
    return this.cloudLinkRepository.create(cloudLink);
  }

  addEntryToCloudLinkTable(
    tableId: string,
    entry: CloudLinkEntry,
  ): Promise<CloudLink | null> {
    return this.cloudLinkRepository.addEntry(tableId, entry);
  }

  deleteEntryFromCloudLinkTable(
    tableId: string,
    entry: CloudLinkEntry,
  ): Promise<CloudLink | null> {
    return this.cloudLinkRepository.removeEntry(tableId, entry);
  }

  deleteCloudLinkTable(tableId: string): Promise<CloudLink | null> {
    return this.cloudLinkRepository.deleteByTableId(tableId);
  }
}
