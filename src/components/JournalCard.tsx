import Link from "next/link"
import { pnlCalc } from "@/utils/pnlCalc"

export function JournalCard({ journal, onDelete }: {
  journal: Journal
  onDelete: (id: string) => void
}) {
  const pnl = pnlCalc(journal.initial_balance, journal.current_balance)
  return (
    <Link
      href={`/dashboard/trades/${journal.id}`}
      className="group border rounded-lg p-6 bg-card hover:bg-muted/10 transition-colors relative"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-medium group-hover:underline">{journal.name}</h2>
        <p className="text-xs text-muted-foreground">ID: {journal.id}</p>
      </div>
      <div className={`mt-4 text-sm font-semibold ${pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
        {pnl >= 0 ? `+${pnl.toFixed(2)}` : pnl.toFixed(2)}
      </div>
      <button
        onClick={(e) => { e.preventDefault(); onDelete(journal.id) }}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        title="Delete journal"
      >
        🗑️
      </button>
    </Link>
  )
}
