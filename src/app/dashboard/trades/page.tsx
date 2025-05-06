'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useJournals } from "@/hooks/useJournal"

export default function TradesFallbackPage() {
  const { journals } = useJournals()
  const router = useRouter()

  useEffect(() => {
    if (journals.length > 0) {
      router.replace(`/dashboard/trades/${journals[0]?.id}`)
    }
  }, [journals, router])

  return <div>Redirecting to your first journal...</div>
}
