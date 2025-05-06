'use client'

import Link from "next/link"
import { useJournals } from "@/hooks/useJournal"

export function Sidebar() {
  const { journals } = useJournals()

  return (
    <div className="w-64 h-full p-6 border-r border-white/10 bg-[var(--card)] backdrop-blur-lg shadow-md text-[var(--foreground)] flex flex-col justify-between">
      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" className="hover:underline">My Journals</Link>
        <Link href="/dashboard/analytics" className="hover:underline">Analytics</Link>
        <Link href="/dashboard/settings" className="hover:underline">Settings</Link>
        <Link
          href={journals[0] ? `/dashboard/trades/${journals[0].id}` : "/dashboard/trades"}
          className="hover:underline"
        >
          Trades
        </Link>
      </nav>
      <div className="mt-4 text-sm text-muted-foreground">User Profile</div>
    </div>
  )
}
