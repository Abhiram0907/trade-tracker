import { notFound } from 'next/navigation'

type Journal = {
  id: string
  name: string
  balance: number
  profitLoss: number
  tradesCount: number
}

// Simulated journal data
const mockJournals: Record<string, Journal> = {
  '1': {
    id: '1',
    name: 'Main Journal',
    balance: 10500,
    profitLoss: 1450.75,
    tradesCount: 34,
  },
  '2': {
    id: '2',
    name: 'Prop Firm Eval',
    balance: 4700,
    profitLoss: -320.5,
    tradesCount: 12,
  },
  '3': {
    id: '3',
    name: 'Firm Eval',
    balance: 700,
    profitLoss: 320.5,
    tradesCount: 2,
  },
}

export default async function JournalDashboard({ params }: { params: { journal: string } }) {

  const journal = mockJournals[params.journal]

  if (!journal) {
    notFound()
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{journal.name}</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 border rounded shadow">
          <p className="text-gray-500 text-sm">Account Balance</p>
          <p className="text-xl font-semibold">${journal.balance.toLocaleString()}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <p className="text-gray-500 text-sm">Profit / Loss</p>
          <p className={`text-xl font-semibold ${journal.profitLoss >= 0 ? 'text-green-600' : 'text-red-500'}`}>
            {journal.profitLoss >= 0 ? '+' : ''}
            {journal.profitLoss.toFixed(2)}
          </p>
        </div>
        <div className="p-4 border rounded shadow col-span-2">
          <p className="text-gray-500 text-sm">Total Trades</p>
          <p className="text-xl font-semibold">{journal.tradesCount}</p>
        </div>
      </div>

      <a
        href={`/dashboard/${journal.id}/positions`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Positions
      </a>
    </div>
  )
}
