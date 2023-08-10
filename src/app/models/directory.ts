export interface DirectoryListItem {
  name: string;
  path: string;
  isDirectory: boolean;
  size: number;
  createdDate: string;
  permissions: {
    ownerRead: boolean;
    ownerWrite: boolean;
    ownerExecute: boolean;
    groupRead: boolean;
    groupWrite: boolean;
    groupExecute: boolean;
    othersRead: boolean;
    othersWrite: boolean;
    othersExecute: boolean;
  };
}
