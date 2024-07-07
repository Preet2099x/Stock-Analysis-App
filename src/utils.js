// utils.js

// Example candleStickOptions configuration
export const candleStickOptions = {
    chart: {
        type: 'candlestick',
        height: 350
    },
    title: {
        text: 'Candlestick Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
};

export const fetchStockData = async (symbol) => {
    // Your fetch logic here
    // Example:
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=YOUR_API_KEY`);
    const data = await response.json();
    return data;
};

export const formatStockData = (stockData) => {
    const formattedData = [];

    if (stockData['Weekly Adjusted Time Series']) {
        Object.entries(stockData['Weekly Adjusted Time Series']).map(
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['4. close']
                    ]
                });
            }
        );
    }
    return formattedData;
};
