import { Sidebar } from "@/components/DashboardSideBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-white/10 bg-[var(--card)] backdrop-blur-lg shadow-md flex justify-between items-center text-[var(--foreground)]">
        <h1 className="text-lg font-semibold">TradeTracker AI</h1>
      </header>

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar /> {/* ✅ This is a client component now */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
