"use client";

import { useState } from "react";
import { createTrade } from "../../../lib/actions/create-trade";


export type TradeObj = {
    ticker: string,
    entry: number,
    exit: number,
    stop: number,
    setup: string,
    timeframe: string,
    emotion: string,
    direction: string,
    notes: string
}

export default function TradeForm() {
    const defaultTrade: TradeObj = {
        ticker: "",
        entry: 0,
        exit: 0,
        stop: 0,
        setup: "",
        timeframe: "",
        emotion: "",
        direction: "",
        notes: ""
    };

    const [tradeDetail, setTradeDetail] = useState<TradeObj>({
        ...defaultTrade
    });

    const newTrade = async () => {
       await createTrade(tradeDetail);
    }

    const clearForm = () => {
        setTradeDetail(defaultTrade);
    }

    return (
        <form className="flex flex-col gap-6">
            <input name="ticker" placeholder="Ticker" onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, ticker: e.target.value}
                })
            }}/>
            <div>
                <input type="number" name="entry" placeholder="Entry" onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, entry: Number(e.target.value)}
                })
            }}/>
                <input name="exit" placeholder="Exit" onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, exit: Number(e.target.value)}
                })
            }}/>
                <input name="stop" placeholder="Stop" onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, stop: Number(e.target.value)}
                })
            }}/>
            </div>
            <div className="flex flex-col gap-4">
                <label>
                    Setup:
                    <select name="setup" onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, setup: e.target.value}
                })
            }}>
                        <option value="ema">EMA</option>
                        <option value="rsi">RSI</option>
                    </select>
                </label>
                <label>
                    Direction:
                    <select name="Direction"  onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, direction: e.target.value}
                })
            }}>
                        <option value="down">Downtrend</option>
                        <option value="neutral">Neutral</option>
                        <option value="up">Uptren</option>
                    </select>
                </label>
                <label>
                    Timeframe:
                    <select name="timeframe"  onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, timeframe: e.target.value}
                })
            }}>
                        <option value="5">5 Minute</option>
                        <option value="15">15 Minute</option>
                        <option value="1hr">1 Hour</option>
                        <option value="4hr">4 Hour</option>
                        <option value="d">Daily</option>
                        <option value="w">Weekly</option>
                    </select>
                </label>
                <label>
                    Emotion:
                    <select name="emotion"  onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, emotion: e.target.value}
                })
            }}>
                        <option value="Anxious">Anxious</option>
                        <option value="Relaxed">Relaxed</option>
                        <option value="Angry">Angry</option>
                    </select>
                </label>
            </div>
            <textarea name="notes" placeholder="Notes"  onChange={e => {
                setTradeDetail((prev) => {
                    return {...prev, notes: e.target.value}
                })
            }}/>
            <div className="flex flex-row gap-6">
                <button onClick={e => {e.preventDefault(); newTrade()}}>Submit</button>
                <button onClick={(e) => {clearForm()}}>Clear</button>
            </div>

        </form>
    )
} 