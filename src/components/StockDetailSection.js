import {Tab} from "./Tab";
import {useState} from "react";

function CompanyOverview({company, id, activeTab}) {
    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Company Overview</h1>
                <div className="grid grid-cols-2x lg:grid-cols-3x gap-8">
                    <div className="col-span-2x text-neutral/90">{company.description}</div>
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

function AnalystRating({company, id, activeTab}) {
    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Analyst Rating</h1>


            </div>
        )
    }
    return <></>
}


function SECFillings({company, id, activeTab}) {
    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">SEC Fillings</h1>


            </div>
        )
    }
    return <></>
}


function Executives({company, id, activeTab}) {
    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Executives</h1>


            </div>
        )
    }
    return <></>
}

function InsiderTradings({company, id, activeTab}) {
    if (id === activeTab) {
        return (
            <div>
                <h1 className="text-xl font-bold mb-4 text-neutral">Insider Tradings</h1>


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

export function StockDetailSection({symbol, company}) {
    const [activeTab, setActiveTab] = useState('overview')

    const tabs = [
        {id: 'overview', display: "Overview", content: CompanyOverview},
        {id: 'analyst-ratings', display: "Analyst Ratings"},
        {id: 'sec-fillings', display: "SEC Fillings"},
        {id: 'executives', display: "Executives"},
        {id: 'insider-tradings', display: "Insider Tradings"},
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
                <AnalystRating company={company} id="analyst-ratings" activeTab={activeTab}/>
                <SECFillings company={company} id="sec-fillings" activeTab={activeTab}/>
                <Executives company={company} id="executives" activeTab={activeTab}/>
                <InsiderTradings company={company} id="insider-tradings" activeTab={activeTab}/>
                <ComparableCompanies company={company} id="comparable-companies" activeTab={activeTab}/>
            </div>

        </div>
    )
}