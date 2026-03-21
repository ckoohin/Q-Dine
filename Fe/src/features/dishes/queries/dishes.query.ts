export const queryKeys = {
    dishesL: {
        all: ['dishes'] as const,
        list: () => [...queryKeys.dishesL.all, "list"] as const,
        detail: (id: string) => [...queryKeys.dishesL.all, "detail", id] as const
    }
} as const