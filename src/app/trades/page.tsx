import { Trade } from "@/generated/prisma/client";
import TradeCard from "./card";
import { prisma } from "@/lib/prisma";

export default async function Trades() {
    const trades = await prisma.trade.findMany({
        orderBy: { createdAt: "desc"}
    });
    return (<div className="flex flex-col w-4/6 gap-6">
            <h2>Trade Journal</h2>
            <button className="bg-blue-800 w-full p-2">+ Add Trade</button>
            <div className="flex flex-col flex-wrap w-full">
            {trades.map((trade : Trade ) => (
                <TradeCard key={trade.id} tradeData={trade}/>
            ))}
            </div>

    </div>
)}