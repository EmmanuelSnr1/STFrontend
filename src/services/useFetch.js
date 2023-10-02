import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "d75e476636msha08ea07fdb84f37p11a6ccjsnf6345c38ebe8",
                        "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com"
                    }
                });
                let result = await response.json();
                console.log(result)
                setData(result);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
