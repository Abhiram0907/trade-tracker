// app/dashboard/trades/[journalId]/page.tsx — SERVER COMPONENT

import { TradeClientView } from "@/components/TradesClientPage";

export default async function TradesPage({ params }: { params: Promise<{ journalID: string }> }) {
    const { journalID } = await params
  
    return (
        <TradeClientView journalId={journalID} />
    )
  }
  