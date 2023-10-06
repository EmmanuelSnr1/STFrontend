import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function useWatchlistAPI() {

    // fetching request headers before posted
    // axios.interceptors.request.use((config) => {
    //     console.log('Request Headers:', config.headers);
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });
    const fetchWatchlist = async () => {
        const response = await axios.get('http://localhost:8090/api/watchlist', {
            withCredentials: true
        });        
        console.log('The Data ', response.data);
        return response.data;        
    };
            
    
    

    

    const { data, error, isLoading, isError } = useQuery('watchlist', fetchWatchlist);

    return {
        watchlist: data,
        error,
        isLoading,
        isError
    };
}

export default useWatchlistAPI;
