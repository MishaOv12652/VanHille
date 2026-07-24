export interface CloudLinkEntry {
  id: string;
  name: string;
  desc: string;
  url: string;
}

export interface CloudLink {
  _id?: string;
  tableId: string;
  settings_obj: unknown;
  data: CloudLinkEntry[];
}
