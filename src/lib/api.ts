// lib/api.ts
import { Trade } from '@/types/trade'

export async function addTrade(trade: Partial<Trade>) {
  const res = await fetch(`https://trade-tracker-backend-kz74.onrender.com/health`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trade),
  })
  if (!res.ok) throw new Error('Failed to add trade')
  console.log(res)
  return res.json()
}

export async function getHealth() {
  const res = await fetch('https://trade-tracker-backend-kz74.onrender.com/health', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) throw new Error('Failed to get health status')
  return res.json()
}
