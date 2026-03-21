"use client"

import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import TableForm from "./table-form"
import { useTableEdit } from "../context/table-edit-context"
import { Table2 } from "lucide-react"

export default function TableEdit() {
  const { editing, setEditing, update } = useTableEdit()

  return (
    <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
      <AnimatePresence>
        {editing && (
          <DialogContent className="sm:max-w-xl p-6 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <DialogHeader className="mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Table2 size={18} />
                </div>
                <DialogTitle className="text-xl font-semibold">Chỉnh sửa bàn</DialogTitle>
              </DialogHeader>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="z-30"
              >
                <TableForm
                  defaultValues={editing}
                  isSubmitting={update.isPending}
                  submitText="Cập nhật"
                  onCancel={() => setEditing(null)}
                  onSubmit={async (values) => {
                    try {
                      await update.mutateAsync({
                        id: editing.id,
                        data: values,
                      })

                      toast.success("Cập nhật bàn thành công")
                      setEditing(null)
                    } catch (err: any) {
                      console.log(err.response.data.message.message);
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
