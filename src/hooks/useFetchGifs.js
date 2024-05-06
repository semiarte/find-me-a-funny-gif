import React, { useState, useEffect } from "react";

export const useFetchGifs = () => {
    const [category, setCategory] = useState('alice')
    const [data, setData] = useState([]);
  
    const searchResults = async () => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=BcK0P6s8e7LWIlpAHMOr7mCAyO7EaoXH&q=${category}&limit=10`)
        const json = await response.json();
        setData(json.data)
    }

    useEffect(() => {
        searchResults(category)
    }, [category])

    return {
        category,
        setCategory,
    }
}