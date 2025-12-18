# Stock Market Dashboard

A React-based stock market dashboard that displays live stock prices for selected Indian companies and banks using the Alpha Vantage API.



## Tech Stack
- React (Vite)
- Axios
- Alpha Vantage API
- JavaScript
- CSS



## Features
- Displays stock prices for selected companies
- Shows price change in green (positive) and red (negative)
- Clean and responsive UI with background image
- API integration using environment variables
- Graceful handling of missing API data

## API Limitation Note

This project uses the Alpha Vantage free API to fetch live stock data.
The free tier of Alpha Vantage has limited and inconsistent support for
Indian stock exchanges (BSE/NSE).

As a result, some Indian stock symbols may return "N/A" values.

Despite this limitation, the project successfully demonstrates:
- API integration using Axios
- Asynchronous data fetching
- Environment variable usage
- Conditional rendering and error handling
- Clean and responsive UI design


## How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/aparnna/stock_market_dashboard.git
cd stock_market_dashboard
