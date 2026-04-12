"use server"
import { prisma } from "@/lib/prisma";
import { TradeObj } from "@/app/trades/new/form";

export async function createTrade(formData: TradeObj) {
    "use server";

    await prisma.trade.create({
        data: {
            ticker: formData["ticker"] as string,
            entry: Number(formData["entry"]),
            exit: Number(formData["exit"]),
            stop: Number(formData["exit"]),
            setup: formData["setup"] as string,
            emotion: formData["emotion"] as string,
            notes: formData["notes"] as string,
        }
    })
}