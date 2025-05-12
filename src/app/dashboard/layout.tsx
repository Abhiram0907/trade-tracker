'use client'

import { useState } from "react"
import { Sidebar } from "@/components/DashboardSideBar"
import { Menu, X } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      {/* Header (Mobile Only) */}
      <header className="w-full px-6 py-4 border-b border-white/10 bg-[var(--card)] backdrop-blur-lg shadow-md flex justify-between items-center text-[var(--foreground)] md:hidden">
        <h1 className="text-lg font-semibold">TradeTracker AI</h1>
        <button onClick={() => setIsSidebarOpen(prev => !prev)}>
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

       {/* Header (Desktop Only) */}
       <header className="hidden md:flex px-6 py-4 border-b border-white/10 bg-[var(--card)] backdrop-blur-lg shadow-md items-center justify-between text-[var(--foreground)]">
            <h1 className="text-lg font-semibold">TradeTracker AI</h1>
          </header>

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-auto">
          {/* Page content */}
          <main className="flex-1 sm:p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
