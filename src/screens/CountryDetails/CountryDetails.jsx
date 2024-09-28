import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const CountryDetails = () => {
    const { countryId } = useParams();
    const API_URL = `https://restcountries.com/v3.1/alpha/${countryId}`;
    const { loading, isError, data: countries } = useFetch(API_URL);
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className='loading loading-spinner loading-lg'></span>
            </div>
        );
    }
    const country = countries[0];

    return (
        <div className='flex flex-col items-center py-6 gap-6'>
            <img
                src={country.flags.png}
                className='object-contain'
                alt={country.translations.por.common}
            />
            <h1 className='text-3xl font-bold'>
                {country.translations.por.common}
            </h1>
            {country.capital && <h3 className='text-2xl '>{country.capital.map((c) => c).join(', ')}</h3>}
            <p>Populacão: {country?.population.toLocaleString('pt-br')}</p>
            <p>Região: {country?.region}</p>
            <p>Sub-região: {country?.subregion || 'Não possui.'}</p>
            <p>Área: {country?.area.toLocaleString('pt-br')} km²</p>
            {country.languages && (
                <p>
                    Idiomas falados:{' '}
                    {Object.values(country.languages).join(', ')}
                </p>
            )}
            {country.currencies && (
                <p>
                    Moeda(s):
                    {Object.values(country.currencies)
                        .map((currency) => currency.symbol)
                        .join(', ')}{' '}
                    {Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(', ')}
                </p>
            )}
            <p>Fuso horário: {country.timezones[0]}</p>
            <p>Domínio de Internet: {country.tld[0]}</p>
            <p>
                Código de discagem internacional:{' '}
                {country.idd.root || 'Não possui.'}
            </p>
            <button className='btn' onClick={() => window.history.back()}>
                VOLTAR
            </button>
        </div>
    );
};

export default CountryDetails;
