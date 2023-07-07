export default function StockStatWidget(title, value) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-accent font-bold">{title}</div>
            <div className="text-lg text-neutral/70">{value}</div>
        </div>
    )
}