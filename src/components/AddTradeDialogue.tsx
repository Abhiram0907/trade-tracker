import { useState } from "react"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter, DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"

export function AddTradeDialog() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [balance, setBalance] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('added trade')
    setName("")
    setBalance("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add New Trade</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm backdrop-blur-3xl">
        <DialogHeader>
          <DialogTitle>Add Trade</DialogTitle>
          <DialogDescription>Create a new journal to track your trades.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="journalName">Name</Label>
            <Input id="journalName" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="initialBalance">Initial Balance</Label>
            <Input id="initialBalance" value={balance} onChange={(e) => setBalance(e.target.value)} required />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="border text-black bg-white">Save Trade</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
