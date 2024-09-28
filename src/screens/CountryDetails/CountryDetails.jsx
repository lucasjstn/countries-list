import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { ptBr } from '../../locales/pt-br';

const CountryDetails = () => {
    const { countryId } = useParams();
    const navigate = useNavigate();
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
        <div className='flex flex-col items-center px-6 py-10 max-w-4xl mx-auto'>
            <img
                src={country.flags.png}
                className='w-60 h-auto object-contain mb-8'
                alt={country.translations.por.common}
            />
            <h1 className='text-4xl font-bold  mb-4'>
                {country.translations.por.common}
            </h1>
            {country.capital && (
                <h3 className='text-2xl  mb-2'>
                    Capital: {country.capital.map((c) => c).join(', ')}
                </h3>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
                <p className='text-lg'>
                    <strong>População:</strong>{' '}
                    {country?.population.toLocaleString('pt-br')}
                </p>
                <p className='text-lg'>
                    <strong>Região:</strong> {country?.region}
                </p>
                <p className='text-lg'>
                    <strong>Sub-região:</strong>{' '}
                    {ptBr.subregions[country?.subregion] || 'Não possui.'}
                </p>
                <p className='text-lg'>
                    <strong>Área:</strong>{' '}
                    {country?.area.toLocaleString('pt-br')} km²
                </p>
                {country.languages && (
                    <p className='text-lg'>
                        <strong>Idiomas:</strong>{' '}
                        {Object.values(country.languages).join(', ')}
                    </p>
                )}
                {country.currencies && (
                    <p className='text-lg'>
                        <strong>Moeda(s):</strong>{' '}
                        {Object.values(country.currencies)
                            .map(
                                (currency) =>
                                    `${currency.symbol} - ${currency.name}`
                            )
                            .join(', ')}
                    </p>
                )}
                <p className='text-lg'>
                    <strong>Fuso horário:</strong> {country.timezones[0]}
                </p>
                <p className='text-lg'>
                    <strong>Domínio de Internet:</strong> {country.tld[0]}
                </p>
                <p className='text-lg'>
                    <strong>Código de discagem internacional:</strong>{' '}
                    {country.idd.root || 'Não possui.'}
                </p>
            </div>

            <button
                className='mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300'
                onClick={() => navigate('/')}
            >
                VOLTAR
            </button>
        </div>
    );
};

export default CountryDetails;
