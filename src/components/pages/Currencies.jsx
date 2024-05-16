import { Link } from "react-router-dom";

export default function Currencies () {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
      ];

    return (
        <div className="currencies">
        { currencies.map((c)=> {
            return (
                
                <Link key={c.name} to={`/price/${c.symbol}`}>
                <h2 >{c.name}</h2>
                </Link>
            )
        })}

        </div>
    );
  }