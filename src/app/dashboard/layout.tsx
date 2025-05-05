'use client'

import Link from "next/link"
import { useState } from "react"
import { useJournals } from "@/hooks/useJournal"

const journals2 = ["Main", "Prop Eval", "Swing Trades"]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [selectedJournal, setSelectedJournal] = useState(journals2[0])
  const { journals } = useJournals()

  console.log("journals", journals)

  return (
    <div className="flex p-4">
        {/* Sidebar */}

        {/* Sidebar */}
        <aside className="w-64 p-6 space-y-4 rounded-xl border border-white/10 bg-[var(--card)] backdrop-blur-lg shadow-md mr-4 text-[var(--foreground)]">
            <h2 className="text-xl font-bold">TradeTracker</h2>
            <nav className="flex flex-col space-y-2">
                <Link href="/dashboard" className="hover:underline">Overview</Link>
                <Link href="/dashboard/analytics" className="hover:underline">Analytics</Link>
                <Link href="/dashboard/settings" className="hover:underline">Settings</Link>
            </nav>
        </aside>

        {/* Main content with top nav */}
        <div className="flex-1 flex flex-col">
            {/* Top Navbar */}
            <header className="w-full px-6 py-4 rounded-xl border border-white/10 bg-[var(--card)] backdrop-blur-lg shadow-md flex justify-between items-center text-[var(--foreground)]">
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <select
                    className="bg-transparent border border-white/20 px-3 py-1 rounded-md text-[var(--foreground)]"
                    value={selectedJournal}
                    onChange={(e) => setSelectedJournal(e.target.value)}
                >
                    {journals2.map(j => (
                    <option key={j} value={j} className="text-black">{j}</option>
                    ))}
                </select>
            </header>

            {/* Page Content */}
            <main className="mt-2 rounded-xl border border-white/10 bg-[var(--card)] backdrop-blur-lg shadow-md">{children}</main>
        </div>
    </div>
  )
}
