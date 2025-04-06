// types/trade.ts
export interface Trade {
    symbol: string
    side: 'long' | 'short'
    entryPrice: number
    exitPrice: number
    quantity: number
    entryTime: string
    exitTime: string
    result: 'win' | 'loss' | 'break-even'
    pnl: number
    notes?: string
    screenshotUrl?: string
  }
  