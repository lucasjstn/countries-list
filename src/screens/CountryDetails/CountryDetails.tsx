import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const CountryDetails = () => {
    const { countryId } = useParams();
    const API_URL = `https://restcountries.com/v3.1/alpha/${countryId}`;
    const { loading, isError, data: countries } = useFetch(API_URL);
    return (
        <div>
            {JSON.stringify(countries)} {countryId}
        </div>
    );

};

export default CountryDetails;
