import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const getCountries = async (url: string): Promise<any> => {
            try {
                const response = await axios.get<Array<any>>(url);
                setData(response.data);
            } catch (error: any) {
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
