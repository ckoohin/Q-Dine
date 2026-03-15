import { TableStatus } from "../types/table-status.type"

export type TableAction =
  | "view"
  | "edit"
  | "reserve"
  | "confirm_clean"
  | "delete"

export const TABLE_ACTION_CONFIG: Record<TableStatus, TableAction[]> = {

  AVAILABLE: [
    "view",
    "edit",
    "reserve",
    "delete"
  ],

  RESERVED: [
    "view",
    "edit",
    "delete"
  ],

  OCCUPIED: [
    "view",
    "edit"
  ],

  CLEANING: [
    "view",
    "edit",
    "confirm_clean"
  ]

}