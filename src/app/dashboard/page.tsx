"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewJournal, getJournals } from "../../lib/api"
import { DialogClose } from "@radix-ui/react-dialog"
import { USER_ID }  from "../page"

export default function DashboardPage() {
  const [journals, setJournals] = useState<Journal[]>([])
  const [journalName, setJournalName] = useState("")
  const [initialBalance, setinitialBalance] = useState("")
  const [open, setOpen] = useState(false);

  async function handleAddJournal(e: React.FormEvent) {

    e.preventDefault()

    await addNewJournal(journalName, initialBalance)
    const updated = await getJournals(USER_ID)
    setJournals(updated)
    setToInputsToEmpty()
    setOpen(false)
  }

  function setToInputsToEmpty (){
    setJournalName("")
    setinitialBalance("")
  }

  function pnlCalc(initial_balance: string, current_balance: string){
    let starting_balance = parseInt(initial_balance)
    let active_balance  = parseInt(current_balance)
    return (starting_balance - active_balance)
  }

  useEffect(() => {
    async function fetchJournals() {
      const journals = await getJournals(USER_ID)
      setJournals(journals)
    }
    fetchJournals()
  }, [])

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Your Journals</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={setToInputsToEmpty}>+ Add New Journal</Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Add Journal</DialogTitle>
              <DialogDescription>
                Create a new journal to start tracking your trades. You can name it something like
                "Main Account" or "Prop Firm Eval".
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleAddJournal} className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="journalName">Name</Label>
                <Input
                  id="journalName"
                  placeholder="Main Journal / Scalps / Swings etc.."
                  value={journalName}
                  onChange={(e) => setJournalName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="initialBalance">Initial Balance</Label>
                <Input
                  id="initialBalance"
                  placeholder="50000 / 1000 / 100"
                  value={initialBalance}
                  onChange={(e) => setinitialBalance(e.target.value)}
                  required
                />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Save Journal</Button>
                </DialogClose> 
              </DialogFooter>
            </form>
            
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {journals?.map((journal: Journal) => (
          <Link
            href={`/journal/${journal.id}`}
            key={journal.id}
            className="group border rounded-lg p-6 bg-card hover:bg-muted/10 transition-colors"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium group-hover:underline">{journal.name}</h2>
              <p className="text-xs text-muted-foreground">ID: {journal.id}</p>
            </div>
            <div
              className={`mt-4 text-sm font-semibold ${
                pnlCalc(journal.initial_balance, journal.current_balance) >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {pnlCalc(journal.initial_balance, journal.current_balance) >= 0 ? `+${pnlCalc(journal.initial_balance, journal.current_balance).toFixed(2)}` : pnlCalc(journal.initial_balance, journal.current_balance).toFixed(2)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
