// lib/api.ts
import { Trade } from '@/types/trade';
import { API_BASE_URL } from './env';

const USER_ID = '1';

export async function addTrade(req: Partial<Trade>) {
  const res = await fetch(`${API_BASE_URL}/health`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req), // 🟡 probably shouldn't send body with GET
  });
  if (!res.ok) throw new Error('Failed to add trade');
  return res.json();
}

export async function addNewJournal(journal_name: string, initial_balance: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/add-journal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: USER_ID,
        journal_name,
        initial_balance
      }),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error adding journal:", error);
    throw error;
  }
}

export async function getJournals(): Promise<Journal[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/get-all-journals?user_id=${USER_ID}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching journals:", error);
    throw error;
  }
}

export async function deleteJournal(journalId: string): Promise<Journal[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/delete-journal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: USER_ID,
        journal_id: journalId,
      }),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error deleting journal:", error);
    throw error;
  }
}
