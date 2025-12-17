import bgImage from "./assets/stock-market.jpg";
import { useEffect, useState } from "react";
import axios from "axios";


export default function App() {


  const [stocks, setStocks] = useState([]);
  useEffect(() => {
  const fetchStocks = async () => {
    try {
      const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

      const symbols = [
        { name: "Reliance", symbol: "RELIANCE.BSE" },
        { name: "TCS", symbol: "TCS.BSE" },
        { name: "HDFC Bank", symbol: "HDFCBANK.BSE" },
        { name: "Infosys", symbol: "INFY.BSE" },
        { name: "ICICI Bank", symbol: "ICICIBANK.BSE" }
      ];

      const results = await Promise.all(
        symbols.map(async (stock) => {
          const response = await axios.get(
            "https://www.alphavantage.co/query",
            {
              params: {
                function: "GLOBAL_QUOTE",
                symbol: stock.symbol,
                apikey: apiKey
              }
            }
          );

          const data = response.data["Global Quote"];

          return {
            name: stock.name,
            price: data ? data["05. price"] : "N/A",
            change: data ? data["10. change percent"] : "0%"
          };
        })
      );

      setStocks(results);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  fetchStocks();
}, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.75)",
          padding: "30px",
          borderRadius: "12px",
          width: "420px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#00e5ff",
            marginBottom: "20px",
          }}
        >
          Stock Market Dashboard
        </h2>

        <table style={{ width: "100%", color: "#fff" }}>
          <thead>
            <tr>
              <th align="left">Stock</th>
              <th align="right">Price (₹)</th>
              <th align="right">Change</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td align="right">{stock.price}</td>
                <td
                  align="right"
                  style={{
                    color: stock.change.startsWith("-")
                      ? "#ff5252"
                      : "#00e676",
                  }}
                >
                  {stock.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
