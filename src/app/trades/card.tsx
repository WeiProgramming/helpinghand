export default function TradeCard() {
    return <div className="w-1/4 bg-gray-900 p-2 rounded-b-md">
        <h3>Spy</h3>
        <p><span className="text-gray-400">Emotion:</span> <span>Sad</span></p>
        <p><span className="text-gray-400">Entry:</span> $455.74</p>
        <p><span className="text-gray-400">Exit:</span> $461.32</p>
        <p><span className="text-gray-400">Setup:</span> <span>EMA</span></p>
        <p><span className="text-gray-400">Realized PnL:</span> <span className="text-green-400">28%</span></p>
        <button>{`Trade Details >>>`} </button>
    </div>
}