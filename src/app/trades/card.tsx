export default function TradeCard() {
    return <div>
        <h3>Spy</h3>
        <p>Emotion: <span>Sad</span></p>
        <p>Entry: $455.74</p>
        <p>Exit: $461.32</p>
        <p>Setup: <span>EMA</span></p>
        <p>Realized PnL: <span className="text-green-400">28%</span></p>
        <button>{`Trade Details >>>`} </button>
    </div>
}