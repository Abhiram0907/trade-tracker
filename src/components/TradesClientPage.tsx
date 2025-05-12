'use client'

import { useEffect, useState } from "react"
import { getTradesByJournal } from "@/lib/api"
import { useJournals } from "@/hooks/useJournal"
import { Trade } from "@/types/trade"
import { AddTradeDialog } from "./AddTradeDialogue"
import { Button } from "./ui/button"
import { TradeMetrics } from "./TradeMetrics"

export function TradeClientView({ journalId }: { journalId: string }) {
  const [trades, setTrades] = useState<Trade[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { journals } = useJournals()

  const journal = journals.find(j => j.id === journalId)
  const journalName = journal?.name

  const positions = [
    {
      id: "1",
      symbol: "AAPL",
      type: "Long",
      entryPrice: 185.25,
      currentPrice: 192.5,
      profit: 7.25,
      profitPercentage: 3.91,
      date: "2025-05-10",
      status: "Open",
    },
    {
      id: "2",
      symbol: "MSFT",
      type: "Short",
      entryPrice: 420.75,
      currentPrice: 410.25,
      profit: 10.5,
      profitPercentage: 2.49,
      date: "2025-05-09",
      status: "Open",
    },
    {
      id: "3",
      symbol: "TSLA",
      type: "Long",
      entryPrice: 178.3,
      currentPrice: 175.2,
      profit: -3.1,
      profitPercentage: -1.74,
      date: "2025-05-08",
      status: "Open",
    },
  ]

  const tradeEntries = [
    { id: "1", date: "2025-05-10 09:30", type: "Buy", price: 185.25, quantity: 10, total: 1852.5 },
    { id: "2", date: "2025-05-10 11:45", type: "Add", price: 186.5, quantity: 5, total: 932.5 },
    { id: "3", date: "2025-05-10 14:20", type: "Sell", price: 188.75, quantity: 3, total: 566.25 },
  ]

  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"details" | "notes">("details")

  const handlePositionClick = (id: string) => {
    setSelectedPosition(id)
  }

  const selectedPositionData = positions.find((p) => p.id === selectedPosition)

  useEffect(() => {
    if (!selectedPosition && positions.length > 0) {
      setSelectedPosition(positions[0].id)
    }

    async function load() {
      setIsLoading(true)
      try {
        const data = await getTradesByJournal(journalId)
        setTrades(data)
      } catch (err) {
        console.error("Failed to fetch trades:", err)
      } finally {
        setTimeout(() => setIsLoading(false), 2000)
      }
    }

    load()
  }, [journal, journalId, positions.length])

  if (isLoading) {
    return (
      <div className="text-muted-foreground animate-pulse">
        ⏳ Loading trades for <strong>{journalName}</strong>...
      </div>
    )
  }

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-background text-foreground mb-5">
      

      {/* Metrics */}
      <div className="">
        <TradeMetrics />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left: Positions */}
        <div className="space-y-4">
          {positions.map((position) => (
            <div
              key={position.id}
              onClick={() => handlePositionClick(position.id)}
              className={`p-4 border rounded cursor-pointer bg-card transition ${
                selectedPosition === position.id
                  ? "border-gray-600"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">{position.symbol}</h4>
                <div className="text-right">
                  <div className="text-sm">{position.type}</div>
                  <div className={`font-semibold ${position.profit >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {position.profit >= 0 ? "+" : ""}
                    {position.profit.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Panel */}
        <div className="col-span-2 bg-card rounded border border-gray-800 p-4 flex flex-col">
          <div className="flex space-x-4 border-b border-gray-700 mb-4">
            <button
              onClick={() => setActiveTab("details")}
              className={`text-sm py-2 px-3 ${
                activeTab === "details" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Trade Details
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`text-sm py-2 px-3 ${
                activeTab === "notes" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Notes
            </button>
          </div>

          {/* Lock container height and prevent jumping */}
          <div className="relative flex-1 overflow-auto min-h-[400px]">
            {activeTab === "details" && selectedPositionData && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">
                    {selectedPositionData.symbol} — {selectedPositionData.type}
                  </h3>
                  <Button onClick={() => {}}>+ Add Position</Button>
                </div>

                <div className="text-sm text-gray-400 space-y-1">
                  <p>Date: {selectedPositionData.date}</p>
                  <p>Status: {selectedPositionData.status}</p>
                  <p>Avg Entry: ${selectedPositionData.entryPrice}</p>
                  <p>Current: ${selectedPositionData.currentPrice}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Trade Entries</h4>
                  <div className="space-y-2">
                    coming soon
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Chart</h4>
                  <div className="h-40 border border-gray-700 rounded flex items-center justify-center text-gray-500">
                    Chart coming soon
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notes" && (
              <div className="text-sm text-gray-300 h-full">Add notes here...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
