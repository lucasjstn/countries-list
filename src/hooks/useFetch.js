import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const getCountries = async (url) => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setLoading(false)
                setIsError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getCountries(url);
    }, []);
    return { loading, isError, data };
}
