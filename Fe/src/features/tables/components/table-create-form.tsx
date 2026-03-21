"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { motion } from "framer-motion"

import TableForm from "./table-form"
import { useCreateTable } from "@/features/tables/hooks/useTables"
import { useTableCreate } from "../context/table-create.context"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Table2 } from "lucide-react"

export default function TableCreateForm() {
    const router = useRouter()
    const create = useCreateTable()
    const { creating, setCreating } = useTableCreate()

    return (
        <Dialog open={creating} onOpenChange={(open) => !open && setCreating(false)}>
            <DialogContent className="sm:max-w-xl rounded-3xl p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <DialogHeader className="mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Table2 size={18} />
                        </div>
                        <DialogTitle className="text-xl font-semibold">Thêm bàn mới</DialogTitle>
                    </DialogHeader>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <TableForm
                            isSubmitting={create.isPending}
                            submitText="Tạo bàn"
                            onCancel={() => setCreating(false)}
                            onSubmit={async (values) => {
                                try {
                                    await create.mutateAsync(values)

                                    setCreating(false)
                                    router.refresh()
                                } catch (err: any) {
                                    toast.error(
                                        err?.response?.data?.message?.message ??
                                        "Tạo bàn thất bại"
                                    )
                                }
                            }}
                        />
                    </motion.div>
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
