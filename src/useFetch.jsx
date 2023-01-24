import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [luckyNum, setLuckyNum] = useState(0)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLuckyNum(Math.floor(Math.random() * (100 - 1 + 1) + 1));
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch data')
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
    }, [url]);

    return { data, luckyNum, error, setData }
}