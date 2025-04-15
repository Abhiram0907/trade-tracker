// lib/api.ts
import { USER_ID } from '@/app/page';
import { AddJournalRequest, Trade } from '@/types/trade';

export async function addTrade(req: Partial<Trade>) {
  const res = await fetch(`https://trade-tracker-backend-kz74.onrender.com/health`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error('Failed to add trade');
  console.log(res);
  return res.json();
}

export async function addNewJournal(journal_name: string, initial_balance: string) {

  try {
    const response = await fetch(`http://localhost:3333/add-journal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: USER_ID,
        journal_name: journal_name,
        initial_balance: initial_balance
      }),
    })
    const data = await response.json()
    console.log(data.data)
    return data.data
  } catch (error) {
    console.error("Error fetching journals:", error)
    throw error
  }
}

export async function getJournals(userID: string): Promise<Journal[]> {
  try {
    const response = await fetch(`http://localhost:3333/get-all-journals?user_id=${userID}`)
    const data = await response.json()
    console.log(data.data)
    return data.data
  } catch (error) {
    console.error("Error fetching journals:", error)
    throw error
  }
}