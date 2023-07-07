import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../services/useFetch";
import {MdError} from "react-icons/md";
import {
    AccumulationDistributionIndicator,
    AtrIndicator,
    BollingerBands,
    CandleSeries,
    Category,
    Crosshair,
    DataLabel,
    DateTime,
    EmaIndicator,
    Export,
    HiloOpenCloseSeries,
    HiloSeries,
    Inject,
    LineSeries,
    MacdIndicator,
    MomentumIndicator,
    RangeAreaSeries,
    RangeTooltip,
    RsiIndicator,
    SmaIndicator,
    SplineSeries,
    StochasticIndicator,
    StockChartComponent,
    StockChartSeriesCollectionDirective,
    StockChartSeriesDirective,
    TmaIndicator,
    Tooltip,
    Trendlines
} from '@syncfusion/ej2-react-charts';
import PageNotFound from "./PageNotFound";
import {StockDetailSection} from "../components/StockDetailSection";
import {useEffect} from "react";


export default function StockDetailPage() {

    const {symbol} = useParams()
    const {data: company, error: companyError, loading: companyLoading} = useFetch('/stock/' + symbol + '/company')
    const {data: logo, error: logoError, loading: logoLoading} = useFetch('/stock/' + symbol + '/logo')
    const {data: series, error: seriesError, loading: seriesLoading} = useFetch('/stock/' + symbol + '/chart')
    let navigate = useNavigate();

    useEffect(() => {
        // navigate("/stock/" + symbol + "/overview")
    }, [symbol])


    const primaryXAxis = {
        valueType: 'DateTime',
        majorGridLines: {width: 0}, majorTickLines: {color: 'transparent'},
    };

    const primaryYAxis = {
        labelFormat: 'n0',
        lineStyle: {width: 0}, rangePadding: 'None',
        majorTickLines: {width: 0}
    }

    const crosshair = {enable: true};
    const tooltip = {enable: true};
    const legendSettings = {visible: true, position: 'Top'};


    function renderError(companyError, logoError, seriesError) {
        if (companyError || logoError || seriesError) {
            return <div className="alert alert-error shadow-lg">
                <div>
                    <MdError size={38}/>
                    <span>Ops! We were on unable to load some of data. Try again later.</span>
                </div>
            </div>
        }
    }

    function renderLoading(companyLoading, logoLoading, seriesLoading) {
        if (companyLoading || logoLoading || seriesLoading) {
            return <div className="flex flex-col items-center justify-center">
                <progress className="progress w-56"/>
                <div>Loading ...</div>
            </div>
        }
    }

    function renderStatWidget(title, value) {
        return (
            <div className="flex flex-col items-center cursor-pointer hover:bg-black/40 bg-black/5 rounded-lg py-2">
                <div className="text-accent ">{title}</div>
                <div className="font-bold text-neutral/90">{value}</div>
            </div>
        )
    }

    function renderMainContent() {
        return (
            <div>
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">
                    <div className='flex space-x-2 col-span-3 items-center lg:col-span-3'>
                        <div className="w-20">
                            <img src={logo.url} alt="Stock symbol"/>
                        </div>
                        <div>
                            <div className="font-bold text-white text-lg">{company.companyName}</div>
                            <div className="text-neutral/90 text-sm">{company.exchange} ({company.symbol})</div>
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-9 grid grid-cols-3 lg:grid-cols-6 gap-4">
                        <div>{renderStatWidget('Market Cap', '$2.46T')}</div>
                        <div>{renderStatWidget('P/E Ratio', '$2.46T')}</div>
                        <div>{renderStatWidget('Revenue', '$365.82B')}</div>
                        <div>{renderStatWidget('EPS', '$5.62')}</div>
                        <div>{renderStatWidget('Dividend Yield', '0.58%')}</div>
                        <div>{renderStatWidget('Beta', '1.21')}</div>
                    </div>
                </div>
                <div className="mt-8 mb-16 w-full bg-white">
                    <StockChartComponent id='stockchart' className="bg-transparent text-neutral"
                                         primaryXAxis={primaryXAxis}
                                         primaryYAxis={primaryYAxis}
                                         crosshair={crosshair}
                                         tooltip={tooltip}
                                         indicatorType={[]}
                                         trendlineType={[]}
                                         height='500'
                                         title={company.companyName + ' Stock Prices'}>
                        <Inject
                            services={[
                                CandleSeries,
                                Tooltip,
                                DataLabel,
                                Category,
                                DateTime,
                                RangeTooltip,
                                Crosshair,
                                LineSeries,
                                SplineSeries,
                                HiloOpenCloseSeries,
                                HiloSeries,
                                RangeAreaSeries,
                                Trendlines,
                                EmaIndicator,
                                RsiIndicator,
                                BollingerBands,
                                TmaIndicator,
                                MomentumIndicator,
                                SmaIndicator,
                                AtrIndicator,
                                Export,
                                AccumulationDistributionIndicator,
                                MacdIndicator,
                                StochasticIndicator
                                // StockLegend,
                            ]}/>
                        <StockChartSeriesCollectionDirective>
                            <StockChartSeriesDirective dataSource={series} type='Candle' name={company.symbol}>
                            </StockChartSeriesDirective>
                        </StockChartSeriesCollectionDirective>
                    </StockChartComponent>
                </div>

                <StockDetailSection symbol={symbol} company={company}/>
            </div>
        )
    }


    console.log('company', company)
    console.log('logo', logo)
    console.log('historical', series)

    if (companyError || logoError) throw  companyError;

    if (!companyLoading && !company) {
        return <PageNotFound/>
    }


    return (
        <div>
            <section className="bg-teal">
                <div className="pt-32 px-4 min-h-screen container mx-auto">
                    {renderError(companyError, logoError, seriesError)}
                    {renderLoading(companyLoading, logoLoading, seriesLoading)}
                    {company && logo && series && (renderMainContent())}
                </div>
            </section>

        </div>

    )
}
