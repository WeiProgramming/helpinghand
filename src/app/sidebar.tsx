import Link from "next/link"

export default function Sidebar() {
    return (
        <div className="sidebar w-1/4">
            <ul>
                <li className="p-6"><Link className="block h-full w-full" href="/dashboard">Dashboard</Link></li>
                <li className="p-6"><Link className="block h-full w-full" href="/trades">Trades</Link></li>
                <li className="p-6"><Link className="block h-full w-full" href="/trades/new">Add Trade</Link></li>
                <li className="p-6"><Link className="block h-full w-full" href="/stats">Stats</Link></li>
            </ul>
        </div>
    )
}