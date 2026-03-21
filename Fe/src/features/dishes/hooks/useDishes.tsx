import { Mutation, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queries/dishes.query";
import { disheService } from "../services/dishes.service";
import { TCreateMenu } from "../types/dishes-pagination";
import { toast } from "sonner";


export function useDishes() {
    const queryClient = useQueryClient()
    return useQuery({
        queryKey: queryKeys.dishesL.list(),
        queryFn: async () => disheService.getDishes(),
        enabled: !queryClient.getQueryData(queryKeys.dishesL.list()),
        staleTime: 5 * 60 * 1000
    })
}

export function useDishe(id: string) {
    return useQuery({
        queryKey: queryKeys.dishesL.detail(id),
        queryFn: async () => disheService.getDishe(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000
    })
}

export function useDisheCreate() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: disheService.createDishe,
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: queryKeys.dishesL.list()
            })
            toast.success("Thêm món ăn thành công")
        },
        onError(error) {
            toast.error("Thêm món ăn thất bại")
        },
    })
}

