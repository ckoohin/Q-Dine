
export type IQrTables = {
  id: number;
  tableId: string;
  sessionToken: string;
  status: string;
  createdAt: string;
  completedAt: null;
}

export type OpenQrTableRequest = {
  pax: number
  serviceType: string
}

export type OpenQrTableResponse = {
  id: number;
  tableId: string;
  sessionToken: string;
  status: string;
  createdAt: string;
  completedAt: null;
}

