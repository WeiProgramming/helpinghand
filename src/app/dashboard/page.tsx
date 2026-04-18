import Link from "next/link";
import { text } from "stream/consumers";

export default function Dashboard() {
    return (
    <div className="w-full p-16 border-4 border-gray-500">
        <div className="dashboard-header flex justify-between py-10">
            <p className="text-4xl">Dashboard</p>
            <Link href="/trades/new" className="bg-blue-700 py-4 px-7 rounded-md">+ Add Trade</Link>
        </div>
        <div className="dashboard-stats flex flex-row justify-evenly gap-5 text-center">
            <div className="dashboard-stats-card bg-gray-600 p-7 w-1/4 rounded-sm">
                <p className="text-3xl">$ 3,250</p>
                <p>Total Profit</p>
            </div>
            <div className="dashboard-stats-card bg-gray-600 p-7 w-1/4 rounded-sm">
                <p className="text-3xl">+ 7.5%</p>
                <p>Average Return</p>
            </div>
            <div className="dashboard-stats-card bg-gray-600 p-7 w-1/4 rounded-sm">
                <p className="text-3xl">18/24</p>
                <p>Win Rate</p>
            </div>
            <div className="dashboard-stats-card bg-gray-600 p-7 w-1/4 rounded-sm">
                <p className="text-3xl">75%</p>
                <p>Setups</p>
            </div>
        </div>
        <div className="dashboard-recent-trades">
            <div className="flex flex-row justify-between pt-20 pb-10">
                <p className="text-2xl">Recent Trades</p>
                <Link href="#">{`View All >`}</Link>
            </div>
            <div className="dashboard-tradelist text-left bg-gray-900 py-4 px-8">
                <div className="dashboard-trade flex flex-row justify-around pb-4">
                    <p className="w-1/4">Ticker</p>
                    <p className="w-1/4">Entry & Exit</p>
                    <p className="w-1/4">P&L</p>
                    <p className="w-1/4">Date</p>
                </div>
                <div className="dashboard-trade flex flex-row justify-around pb-2">
                    <p className="w-1/4">Spy</p>
                    <p className="w-1/4">{`510 -> 515`}</p>
                    <p className="w-1/4">+$250</p>
                    <p className="w-1/4">May 2, 2024</p>
                </div>
            </div>
        </div>
    </div>
    )
}