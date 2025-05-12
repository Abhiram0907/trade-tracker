'use client'

import Link from "next/link"
import { useJournals } from "@/hooks/useJournal"
import { useEffect } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { journals } = useJournals()

  useEffect(() => {
    if (typeof window !== "undefined" && isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 md:relative top-0 left-0 h-full w-64 bg-[var(--card)] backdrop-blur-lg border-r border-white/10 shadow-md text-[var(--foreground)] p-6 transform transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-2">
          <Link href="/dashboard" className="hover:underline" onClick={onClose}>
            My Journals
          </Link>
          <Link href="/dashboard/analytics" className="hover:underline" onClick={onClose}>
            Analytics
          </Link>
          <Link href="/dashboard/settings" className="hover:underline" onClick={onClose}>
            Settings
          </Link>
          <Link
            href={journals[0] ? `/dashboard/trades/${journals[0].id}` : "/dashboard/trades"}
            className="hover:underline"
            onClick={onClose}
          >
            Trades
          </Link>
        </nav>
        <div className="mt-4 text-sm text-muted-foreground">User Profile</div>
      </div>
    </>
  )
}
