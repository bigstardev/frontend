import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (initialUrl) => {
    const [url, setUrl] = useState(initialUrl)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const FetchData = async () => {
            console.log(url)
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await axios.get(url);
                setData(response.data)
            }
            catch (error) {
                setIsError(true)
            }
            setIsLoading(false)

        }
        FetchData();
    }, [url])

    return { isLoading, data, isError, setUrl };
}

export default useFetch