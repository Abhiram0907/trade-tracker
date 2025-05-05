"use client"

import { useEffect, useState } from "react"
import { getJournals, addNewJournal, deleteJournal } from "@/lib/api"

export function useJournals() {
  const [journals, setJournals] = useState<Journal[]>([])

  useEffect(() => {
    getJournals().then(setJournals)
  }, [])

  async function addJournal(name: string, balance: string) {
    await addNewJournal(name, balance)
    const updated = await getJournals()
    setJournals(updated)
  }

  async function removeJournal(id: string) {
    await deleteJournal(id)
    const updated = await getJournals()
    setJournals(updated)
  }

  return { journals, addJournal, removeJournal }
}
