import { useState, useEffect } from 'react';

function useFetchStock(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd75e476636msha08ea07fdb84f37p11a6ccjsnf6345c38ebe8',
                    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
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

export default useFetchStock;
