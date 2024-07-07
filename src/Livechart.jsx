import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchStockData, formatStockData, candleStickOptions } from './utils'; // Adjust the path if necessary

const LiveChart = ({ symbol }) => {
    const [stockData, setStockData] = useState({});

    useEffect(() => {
        fetchStockData(symbol).then(data => setStockData(data));
    }, [symbol]);

    const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

    return (
        <ReactApexChart
            series={[
                {
                    data: seriesData
                }
            ]}
            options={candleStickOptions}
            type="candlestick"
        />
    );
};

export default LiveChart;
