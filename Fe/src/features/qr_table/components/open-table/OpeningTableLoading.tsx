"use client"

import { motion } from "framer-motion"

export default function OpeningBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, x: 10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute top-0 right-0 px-4 py-3 bg-savory-green text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl shadow-md flex items-center gap-1"
    >
      <span>Đang mở</span>

      <span className="flex">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="mx-[1px]"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          >
            .
          </motion.span>
        ))}
      </span>
    </motion.div>
  )
}