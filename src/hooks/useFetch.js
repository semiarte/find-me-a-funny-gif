import { useState, useEffect } from "react"

export const useFetch = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getGifs = async () => {
      try {
          const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=BcK0P6s8e7LWIlpAHMOr7mCAyO7EaoXH&q=one&limit=10`);
          const json = await response.json();
          setData(json.data)
      } catch (error) {
          console.log(error)
      } finally {
          setLoading(false);
      }
    }
  
    useEffect(() => {
      getGifs();
    }, []);
  
    return {
      data,
      isLoading
    }
  } 