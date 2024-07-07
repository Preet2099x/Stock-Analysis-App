import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchStockData, formatStockData, candleStickOptions } from './utils'; // Adjust the path if necessary

const LiveChart = ({ symbol }) => {
    const [stockData, setStockData] = useState({});

    useEffect(() => {
        fetchStockData(symbol).then(data => setStockData(data));
    }, [symbol]);

    const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

    const options = {
        ...candleStickOptions,
        xaxis: {
            labels: {
                style: {
                    colors: '#FFFFFF' // Set x-axis labels to white
                }
            },
            axisBorder: {
                color: '#FFFFFF' // Set x-axis border to white
            },
            axisTicks: {
                color: '#FFFFFF' // Set x-axis ticks to white
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#FFFFFF' // Set y-axis labels to white
                }
            },
            axisBorder: {
                color: '#FFFFFF' // Set y-axis border to white
            },
            axisTicks: {
                color: '#FFFFFF' // Set y-axis ticks to white
            }
        }
    };

    return (
        <ReactApexChart
            series={[
                {
                    data: seriesData
                }
            ]}
            options={options}
            type="candlestick"
        />
    );
};

export default LiveChart;
