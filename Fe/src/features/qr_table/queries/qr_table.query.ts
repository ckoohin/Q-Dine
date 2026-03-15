export const qrTableQueryKeys = {
  qr_table: {
    all: ['qr_table'] as const,
    open: () => [...qrTableQueryKeys.qr_table.all, 'open'] as const,
    checkout: () => [...qrTableQueryKeys.qr_table.all, 'checkout'] as const,
  },
} as const

