import { TradeObj } from "./new/form";

type TradeCardProps = {
    tradeData: TradeObj;
};

export default function TradeCard({ tradeData }: TradeCardProps) {
    return (
        <div className="w-full bg-gray-900 p-2 rounded-b-md m-4">
            <h3>{tradeData.ticker}</h3>

            <p>
                <span className="text-gray-400">Emotion:</span>{" "}
                <span>{tradeData.emotion}</span>
            </p>

            <p>
                <span className="text-gray-400">Entry:</span> ${tradeData.entry}
            </p>

            <p>
                <span className="text-gray-400">Exit:</span> ${tradeData.exit}
            </p>

            <p>
                <span className="text-gray-400">Setup:</span>{" "}
                <span>{tradeData.setup}</span>
            </p>

            <p>
                <span className="text-gray-400">Realized PnL:</span>{" "}
                <span className="text-green-400">
                    {((tradeData.exit - tradeData.entry) / tradeData.entry * 100).toFixed(2)}%
                </span>
            </p>

            <button>{`Trade Details >>>`}</button>
        </div>
    );
}