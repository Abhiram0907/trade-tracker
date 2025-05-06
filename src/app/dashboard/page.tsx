"use client"

import { AddJournalDialog } from "@/components/AddJournalDialogue"
import { JournalCard } from "@/components/JournalCard"
import { useJournals } from "@/hooks/useJournal"


export default function DashboardPage() {
  const { journals, addJournal, removeJournal } = useJournals()

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Your Journals</h1>
        <AddJournalDialog onSubmit={addJournal} />
      </div>

      <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-screen">
        {journals.map(journal => (
          <JournalCard key={journal.id} journal={journal} onDelete={removeJournal} />
        ))}
      </div>
    </div>
  )
}
