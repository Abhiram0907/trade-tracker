export function TradeMetrics() {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-card rounded">
          <span className="text-sm text-gray-400 mb-1 block">Total P/L</span>
          <span className="text-2xl font-bold text-green-500">$500</span>
        </div>
        <div className="p-4 bg-card rounded">
          <span className="text-sm text-gray-400 mb-1 block">Win rate %</span>
          <span className="text-2xl font-bold text-green-500">75%</span>
        </div>
        <div className="p-4 bg-card rounded">
          <span className="text-sm text-gray-400 mb-1 block">Avg W / L </span>
          <span className="text-2xl font-bold text-green-500">$500 / $400</span>
        </div>
        <div className="p-4 bg-card rounded">
          <span className="text-sm text-gray-400 mb-1 block">Profit factor</span>
          <span className="text-xl font-bold text-green-500">14.76</span>
        </div>
        {/* Add more metric cards here if needed */}
      </div>
    )
  }
  