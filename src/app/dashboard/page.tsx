"use client"

import { AddJournalDialog } from "@/components/AddJournalDialogue"
import { JournalCard } from "@/components/JournalCard"
import { useJournals } from "@/hooks/useJournal"
import Link from "next/link"


export default function DashboardPage() {
  const { journals, addJournal, removeJournal } = useJournals()

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Your Journals</h1>
        <AddJournalDialog onSubmit={addJournal} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {journals.map(journal => (
          <JournalCard key={journal.id} journal={journal} onDelete={removeJournal} />
        ))}
      </div>
    </div>
  )
}
