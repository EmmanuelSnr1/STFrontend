import {useEffect, useState} from "react";

const baseUrl = 'https://cloud.iexapis.com/stable/'
const token = 'pk_d0153e3e12ee4a9f83ae3a1c3c38a8cd';

export default function useFetch(url, queryParams = '') {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function init() {
            try {
                const response = await fetch(baseUrl + url + "?token=" + token + queryParams)
                if (response.ok) {
                    const json = await response.json()
                    // console.log('response data', json)
                    setData(json)
                }
                // else {
                //     throw response;
                // }
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }

        init();

    }, [queryParams, url])

    return {data, error, loading}
}
