'use client'

import { cn } from "@/lib/utils"

interface PositionCardProps {
  id: string
  symbol: string
  type: string
  profit: number
  selected: boolean
  onClick: (id: string) => void
}

export function PositionCard({ id, symbol, type, profit, selected, onClick }: PositionCardProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "p-4 border rounded cursor-pointer bg-card transition",
        selected ? "border-gray-600" : "border-gray-800 hover:border-gray-700"
      )}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">{symbol}</h4>
        <div className="text-right">
          <div className="text-sm">{type}</div>
          <div className={cn("font-semibold", profit >= 0 ? "text-green-500" : "text-red-500")}>{profit >= 0 ? "+" : ""}{profit.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}