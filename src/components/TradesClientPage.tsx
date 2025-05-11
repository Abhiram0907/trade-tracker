'use client'

import { useEffect, useState } from "react"
import { getTradesByJournal } from "@/lib/api"
import { useJournals } from "@/hooks/useJournal"
import { Trade } from "@/types/trade"
import { AddTradeDialog } from "./AddTradeDialogue"

export function TradeClientView({ journalId }: { journalId: string }) {
  const [trades, setTrades] = useState<Trade[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { journals } = useJournals()

  const journal = journals.find(j => j.id === journalId)
  const journalName = journal?.name

  useEffect(() => {

    async function load() {
      setIsLoading(true)
      try {
        const data = await getTradesByJournal(journalId)
        setTrades(data)
      } catch (err) {
        console.error("Failed to fetch trades:", err)
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    }

    load()
  }, [journal, journalId])

  if (isLoading) {
    return (
      <div className="text-muted-foreground animate-pulse">
        ⏳ Loading trades for <strong>{journalName}</strong>...
      </div>
    )
  }

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Trades for {journalName}</h1>
        <AddTradeDialog />
      </div>
    </div>
  )
}
