export function Tab({id, activeTab, setActiveTab, display}) {

    return (
        <a onClick={() => setActiveTab(id)}
           className={id === activeTab ? "tab tab-active tab-lg border-0 bg-accent/20 hover:bg-accent/50 hover:text-dark-teal text-white/90 capitalize" : "tab tab-lg"}>{display}</a>
    )
}

