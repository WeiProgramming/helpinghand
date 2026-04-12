import TradeCard from "./card";
import { prisma } from "@/lib/prisma";

export default async function Trades() {
    const trades = await prisma.trade.findMany({
        orderBy: { createdAt: "desc"}
    });
    return (<div className="flex flex-wrap gap-6">
            <TradeCard/>
            <TradeCard/>
            <TradeCard/>
            {trades.map((trade : any ) => (
                <div key={trade.id}>
                    {trade.ticker} - {trade.setup ?? "No setup"}
                </div>
            ))}
    </div>
)}