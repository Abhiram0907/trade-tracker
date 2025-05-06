'use client'

import { useEffect, useState } from "react"
import { getTradesByJournal } from "@/lib/api"
import { useJournals } from "@/hooks/useJournal"
import { Trade } from "@/types/trade"

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
    <div>
      <h1 className="text-xl font-bold mb-4">Trades for {journalName}</h1>
      {/* {trades.length === 0 ? (
        <p className="text-sm text-muted-foreground">No trades found.</p>
      ) : (
        <pre>{JSON.stringify(trades, null, 2)}</pre>
      )} */}
    </div>
  )
}
