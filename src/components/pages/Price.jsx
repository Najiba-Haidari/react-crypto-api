import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Price() {
    const apiKey = "6E167CE0-7212-46FC-99CC-BB225C25E945";
    // Grabbing the currency symbol from the URL Params.
    const params = useParams()
    const symbol = params.symbol
    // Using the other two variables to create our URL.
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // State to hold the coin data.
    const [coin, setCoin] = useState("null");

    const getCoin = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getCoin();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate.toFixed(2)}</h2>
            </div>
        );
    };

    // Function for when data doesn't exist.
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // If coin has data, run the loaded function; otherwise, run loading.
    return coin && coin.rate ? loaded() : loading();
}