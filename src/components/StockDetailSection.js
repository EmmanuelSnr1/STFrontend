import {Tab} from "./Tab";
import {useState} from "react";


function CompanyOverview({company, id, activeTab}) {
    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Company Overview</h1>
                <div className="grid grid-cols-2x lg:grid-cols-3x gap-8">
                    <div className="col-span-2x text-neutral/90">{company?.longBusinessSummary}</div>
                    {/*<div className="col-span-2 lg:col-span-1">*/}
                    {/*    <table className="table table-auto">*/}
                    {/*        /!*<thead>*!/*/}
                    {/*        /!*<tr>*!/*/}
                    {/*        /!*<th>Song</th>*!/*/}
                    {/*        /!*<th>Artist</th>*!/*/}
                    {/*        /!*<th>Year</th>*!/*/}
                    {/*        /!*</tr>*!/*/}
                    {/*        /!*</thead>*!/*/}
                    {/*        <tbody>*/}
                    {/*        <tr>*/}
                    {/*            <td>No. of Employees</td>*/}
                    {/*            <td>{company.employees}</td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td>C.E.O</td>*/}
                    {/*            <td>{company.CEO || 'N/A'}</td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td>Industry</td>*/}
                    {/*            <td>{company.industry}</td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td>Country</td>*/}
                    {/*            <td>{company.city} {company.country}</td>*/}
                    {/*        </tr>*/}
                    {/*        <tr>*/}
                    {/*            <td>Website</td>*/}
                    {/*            <td>{company.website}</td>*/}
                    {/*        </tr>*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*</div>*/}
                </div>

            </div>
        )
    }
    return <></>
}


function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
    }
    return num.toString();
}
function InstitutionOwnership({holders, id, activeTab}) {
    const ownershipList = holders?.ownershipList;

    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Institutional Ownership</h1>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Organization</th>
                            <th className="border px-4 py-2">Position</th>
                            <th className="border px-4 py-2">Value</th>
                            <th className="border px-4 py-2">Percentage Change</th>
                            <th className="border px-4 py-2">Percentage Held</th>

                        </tr>
                    </thead>
                    <tbody>
                        {ownershipList?.map((holder, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{holder.organization}</td>
                                <td className="border px-4 py-2">{formatNumber(holder.position?.raw || 0)}</td>
                                <td className="border px-4 py-2">{formatNumber(holder.value?.raw || 0)}</td>
                                <td className="border px-4 py-2">{holder.pctChange?.fmt}</td>
                                <td className="border px-4 py-2">{holder.pctHeld?.fmt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return <></>
}





function SECFillings({filings, id, activeTab}) {
    const filingsList = filings?.filings;

    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Institutional Ownership</h1>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Type</th>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Public information on the Filings</th>

                        </tr>
                    </thead>
                    <tbody>
                        {filingsList?.map((filings, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{filings.date}</td>
                                <td className="border px-4 py-2">{filings.type}</td>
                                <td className="border px-4 py-2">{filings.title}</td>
                                <td className="border px-4 py-2">
                                    {filings.exhibits?.map(exhibit => (
                                        <div key={exhibit.url}>
                                            <a href={exhibit.url} target="_blank" rel="noopener noreferrer">{exhibit.url}</a>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return <></>
}


function Executives({company, id, activeTab}) {
    const executives = company?.companyOfficers;

    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Executives</h1>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {executives?.map((executive, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{executive.name}</td>
                                <td className="border px-4 py-2">{executive.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return <></>
}

function InsiderHoldings({insiders, id, activeTab}) {
    const insidersList = insiders?.holders;
    console.log(insidersList);

    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Insider Activities</h1>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Relation to company</th>
                            <th className="border px-4 py-2">Transaction Description</th>
                            <th className="border px-4 py-2">Value</th>
                            <th className="border px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insidersList?.map((insiders, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{insiders?.name}</td>
                                <td className="border px-4 py-2">{insiders?.relation}</td>
                                <td className="border px-4 py-2">{insiders?.transactionDescription}</td>
                                <td className="border px-4 py-2">{formatNumber(insiders?.positionDirect?.raw || 0)}</td>
                                <td className="border px-4 py-2">{insiders.positionDirectDate?.fmt}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return <></>
}

function ComparableCompanies({company, id, activeTab}) {
    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Comparable Companies</h1>


            </div>
        )
    }
    return <></>
}



export function StockDetailSection({
    symbol,
    company,
    institutionOwnership,
    secFilings,
    insiderHoldings,
    keyFinancials}){
    const [activeTab, setActiveTab] = useState('overview')

    const tabs = [
        {id: 'overview', display: "Overview", content: CompanyOverview},
        {id: 'institutional-holdings', display: "Institutional Ownership", content: InstitutionOwnership},
        {id: 'sec-fillings', display: "SEC Fillings"},
        {id: 'executives', display: "Executives"},
        {id: 'insider-holdings', display: "Insider Holdings"},
        {id: 'comparable-companies', display: "Comparable Companies"},
    ]


    return (
        <div className="pt-12 pb-32 px-12 rounded-tl-3xl rounded-tr-3xl bg-darker-teal">
            <div className="tabs bg-transparent tabs-boxed">
                {
                    tabs.map(tab => (
                        <Tab key={tab.id} id={tab.id}
                             activeTab={activeTab}
                             display={tab.display}
                             setActiveTab={setActiveTab}/>
                    ))

                }
            </div>
            <div className="divider"/>
            <div className="min-h-16">
                <CompanyOverview company={company} id="overview" activeTab={activeTab}/>
                <InstitutionOwnership holders={institutionOwnership} id="institutional-holdings" activeTab={activeTab}/>
                <SECFillings filings={secFilings} id="sec-fillings" activeTab={activeTab}/>
                <Executives company={company} id="executives" activeTab={activeTab}/>
                <InsiderHoldings insiders={insiderHoldings} id="insider-holdings" activeTab={activeTab}/>
                <ComparableCompanies company={company} id="comparable-companies" activeTab={activeTab}/>
            </div>

        </div>
    )
}