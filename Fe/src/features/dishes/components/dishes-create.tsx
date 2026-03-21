"use client"
import React from 'react'
import { Table2, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion"
import { DialogHeader } from '@/components/ui/dialog'
import { useDishesContext } from '../context/dishes-context'
import DishesForm from './dishes-from'
import { useDisheCreate } from '../hooks/useDishes'
function DishesCreate() {
    const { creating, setCreating } = useDishesContext()

    const create = useDisheCreate()
    return (
        <>
            <Dialog open={!!creating} onOpenChange={(open) => !open && setCreating(false)}>
                <AnimatePresence>
                    {creating && (
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
                                    <DishesForm
                                        submitText="Thêm món ăn"
                                        onCancel={() => setCreating(false)}
                                        onSubmit={async (values) => {
                                            try {
                                                await create.mutateAsync(values)
                                                setCreating(false)
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
        </>
    )
}

export default DishesCreate