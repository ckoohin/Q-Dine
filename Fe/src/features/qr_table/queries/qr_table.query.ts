export const qrTableQueryKeys = {
  qr_table: {
    all: ['qr_table'] as const,
    open: () => [...qrTableQueryKeys.qr_table.all, 'open'] as const,
    checkout: (id: string) => [...qrTableQueryKeys.qr_table.all, 'checkout', id] as const,
  },
} as const

