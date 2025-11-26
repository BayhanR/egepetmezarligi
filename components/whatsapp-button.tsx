"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
      >
        <Button size="lg" className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl" asChild>
          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile iletişime geçin"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}
