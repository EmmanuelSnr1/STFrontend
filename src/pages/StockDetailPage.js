import { useNavigate, useParams } from "react-router-dom";
import useFetchStock from "../services/useFetchStock";
import { MdError } from "react-icons/md";
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
  Trendlines,
} from "@syncfusion/ej2-react-charts";
import PageNotFound from "./PageNotFound";
import { StockDetailSection } from "../components/StockDetailSection";
import { useEffect } from "react";
import useStockAPI from "../services/useStockAPI";

export default function StockDetailPage() {
  const { symbol } = useParams();
  const {
    data: company,
    error: companyError,
    loading: companyLoading,
  } = useStockAPI("/" + symbol + "/fundamentals");
  const {
    data: logo,
    error: logoError,
    loading: logoLoading,
  } = useStockAPI("/" + symbol + "/logo");
  const {
    data: series,
    error: seriesError,
    isLoading: seriesLoading,
  } = useStockAPI("/" + symbol + "/time-series/1wk");
  const {
    data: companyProfile,
    error: companyProfileError,
    loading: companyProfileLoading,
  } = useStockAPI("/" + symbol + "/profile");
  const {
    data: institutionOwnership,
    error: institutionOwnershipError,
    loading: institutionOwnershipLoading,
  } = useStockAPI("/" + symbol + "/institution-ownership");
  const {
    data: secFilings,
    error: secFilingsError,
    loading: secFilingsLoading,
  } = useStockAPI("/" + symbol + "/sec-filings");
  const {
    data: insiderHoldings,
    error: insiderHoldingsError,
    loading: insiderHoldingsLoading,
  } = useStockAPI("/" + symbol + "/insider-holders");
  const {
    data: keyFinancials,
    error: keyFinancialsError,
    loading: keyFinancialsLoading,
  } = useStockAPI("/" + symbol + "/financial-data");
  const {
    data: keyInfo,
    error: keyInfoError,
    isLoading: keyInfoLoading,
  } = useStockAPI("/" + symbol + "/key-stats");

  let navigate = useNavigate();
  //this style is called Conditional Rendering
  // const address = companyProfile && companyProfile.assetProfile ? companyProfile.assetProfile.address1 : null;

  // this style is called optional Chaining.
  const companyData = companyProfile?.assetProfile;
  const institutionOwnershipData = institutionOwnership?.institutionOwnership;
  const secFilingsData = secFilings?.secFilings;
  const insiderHoldingsData = insiderHoldings?.insiderHolders;
  const keyFinancialsData = keyFinancials;

  console.log("The company", company);

  const seriesData =
    series && series.items
      ? Object.values(series.items).map((item) => ({
          date: new Date(item?.date_utc * 1000), // Convert UNIX timestamp to JavaScript Date
          open: item?.open,
          high: item?.high,
          low: item?.low,
          close: item?.close,
          volume: item?.volume,
          adjclose: item?.adjclose,
        }))
      : [];

  useEffect(() => {
    // navigate("/stock/" + symbol + "/overview")
  }, [symbol]);

  const primaryXAxis = {
    valueType: "DateTime",
    labelFormat: "dd/MM/yyyy",
    majorGridLines: { width: 0 },
    majorTickLines: { color: "transparent" },
  };

  const primaryYAxis = {
    labelFormat: "n2",
    lineStyle: { width: 0 },
    rangePadding: "None",
    majorTickLines: { width: 0 },
  };

  const crosshair = { enable: true };
  const tooltip = { enable: true };
  const legendSettings = { visible: true, position: "Top" };

  function renderError(companyError, logoError, seriesError) {
    if (companyError || logoError || seriesError) {
      return (
        <div className="alert alert-error shadow-lg">
          <div>
            <MdError size={38} />
            <span>
              Ops! We were on unable to load some of data. Try again later.
            </span>
          </div>
        </div>
      );
    }
  }

  function renderLoading(companyLoading, logoLoading, seriesLoading) {
    if (companyLoading || logoLoading || seriesLoading) {
      return (
        <div className="flex flex-col items-center justify-center">
          <progress className="progress w-56" />
          <div>Loading ...</div>
        </div>
      );
    }
  }

  function renderStatWidget(title, value) {
    return (
      <div className="flex flex-col items-center cursor-pointer hover:bg-black/40 bg-black/5 rounded-lg py-2">
        <div className="text-accent ">{title}</div>
        <div className="font-bold text-neutral/90">{value}</div>
      </div>
    );
  }

  function renderMainContent() {
    return (
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="flex space-x-2 col-span-3 items-center lg:col-span-3">
            <div className="w-20">
              <img src={logo.url} alt="Stock symbol" />
            </div>
            <div>
              <div className="font-bold text-white text-lg">{company.name}</div>
              <div className="text-neutral/90 text-sm">
                {company.exchange} ({company.symbol})
              </div>
            </div>
          </div>

          {/* <div className="col-span-2 lg:col-span-9 grid grid-cols-3 lg:grid-cols-6 gap-4">
                        <div>{renderStatWidget('Market Cap', '$2.46T')}</div>
                        <div>{renderStatWidget('P/E Ratio', '$2.46T')}</div>
                        <div>{renderStatWidget('Revenue', '$365.82B')}</div>
                        <div>{renderStatWidget('EPS', '$5.62')}</div>
                        <div>{renderStatWidget('Dividend Yield', '0.58%')}</div>
                        <div>{renderStatWidget('Beta', '1.21')}</div>
                    </div> */}
          <div className="col-span-2 lg:col-span-9 grid grid-cols-3 lg:grid-cols-6 gap-4">
            {keyInfoLoading && <div>Loading...</div>}
            {keyInfoError && <div>Error: {keyInfoError.message}</div>}
            {keyInfo && (
              <>
                <div>
                  {renderStatWidget(
                    "Market Cap",
                    keyInfo?.defaultKeyStatistics?.enterpriseValue?.fmt
                  )}
                </div>
                <div>
                  {renderStatWidget(
                    "P/E Ratio",
                    keyInfo?.defaultKeyStatistics?.forwardPE?.fmt
                  )}
                </div>
                <div>
                  {renderStatWidget(
                    "Revenue",
                    keyInfo?.defaultKeyStatistics?.netIncomeToCommon?.fmt
                  )}
                </div>
                <div>
                  {renderStatWidget(
                    "EPS",
                    keyInfo?.defaultKeyStatistics?.trailingEps?.fmt
                  )}
                </div>
                {/* <div>{renderStatWidget('Dividend Yield', `${keyInfo?.defaultKeyStatistics?.lastDividendValue.raw * 100}%`)}</div> */}
                <div>
                  {renderStatWidget(
                    "Dividend Yield",
                    keyInfo?.defaultKeyStatistics?.lastDividendValue?.raw *
                      100 +
                      "%"
                  )}
                </div>

                <div>
                  {renderStatWidget(
                    "Beta",
                    keyInfo?.defaultKeyStatistics?.beta?.fmt
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mt-8 mb-16 w-full bg-white">
          <StockChartComponent
            id="stockchart"
            className="bg-transparent text-neutral"
            primaryXAxis={primaryXAxis}
            primaryYAxis={primaryYAxis}
            crosshair={crosshair}
            tooltip={tooltip}
            indicatorType={[]}
            trendlineType={[]}
            height="500"
            title={series?.meta?.symbol + " Stock Prices"}
          >
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
                StochasticIndicator,
                // StockLegend,
              ]}
            />
            <StockChartSeriesCollectionDirective>
              <StockChartSeriesDirective
                dataSource={seriesData}
                type="Candle"
                name={company.symbol}
              ></StockChartSeriesDirective>
            </StockChartSeriesCollectionDirective>
          </StockChartComponent>
        </div>

        <StockDetailSection
          symbol={symbol}
          company={companyData}
          institutionOwnership={institutionOwnershipData}
          secFilings={secFilingsData}
          insiderHoldings={insiderHoldingsData}
          keyFinancials={keyFinancialsData}
        />
      </div>
    );
  }

  // console.log('company', company)
  // console.log('logo', logo)
  // console.log('historical', series)

  if (companyError || logoError) throw companyError;

  if (!companyLoading && !company) {
    return <PageNotFound />;
  }

  return (
    <div>
      <section className="bg-teal">
        <div className="pt-32 px-4 min-h-screen container mx-auto">
          {companyLoading || logoLoading || seriesLoading
            ? renderLoading(companyLoading, logoLoading, seriesLoading)
            : companyError || logoError || seriesError
            ? renderError(companyError, logoError, seriesError)
            : company && logo && series
            ? renderMainContent()
            : null}
        </div>
      </section>
    </div>
  );
}
