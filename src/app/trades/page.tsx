import TradeCard from "./card";
import { prisma } from "@/lib/prisma";

export default async function Trades() {
    const trades = await prisma.trade.findMany({
        orderBy: { createdAt: "desc"}
    });
    return (<div className="flex flex-col w-full gap-6">
            <h2>Trade Journal</h2>
            <div className="flex flex-row flex-wrap  w-full gap-6">
            <TradeCard/>
            <TradeCard/>
            <TradeCard/>
            {trades.map((trade : any ) => (
                <div key={trade.id}>
                    {trade.ticker} - {trade.setup ?? "No setup"}
                </div>
            ))}
            </div>

    </div>
)}