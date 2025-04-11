import Link from 'next/link';

type Journal = {
  id: string;
  name: string;
  profitLoss: number;
};

// Simulated list of journals
const journals: Journal[] = [
  { id: '1', name: 'Main Journal', profitLoss: 1450.75 },
  { id: '2', name: 'Prop Firm Eval', profitLoss: -320.5 },
  { id: '3', name: 'Swing Trades', profitLoss: 980.1 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Journals</h1>

      <ul className="space-y-4">
        {journals.map(journal => (
          <li key={journal.id} className="p-4 border rounded shadow hover:bg-gray-50 transition">
            <Link href={`/dashboard/${journal.id}`}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{journal.name}</p>
                  <p className="text-sm text-gray-600">ID: {journal.id}</p>
                </div>
                <div
                  className={`font-medium ${journal.profitLoss >= 0 ? 'text-green-600' : 'text-red-500'}`}
                >
                  {journal.profitLoss >= 0 ? '+' : ''}
                  {journal.profitLoss.toFixed(2)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
