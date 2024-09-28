import React from 'react';
import { useAppContext } from '../../screens/Home/Home';
import { Link } from 'react-router-dom';

const CountryList = () => {
    const { visibleCountries, page, setPage } = useAppContext();
    return (
        <section className='flex flex-col items-center md:grid md:grid-cols-3 gap-6'>
            {visibleCountries?.map((country, index) => (
                <Link
                    key={index}
                    className='card w-64 h-[250px] bg-base-100 overflow-hidden my-4 shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105'
                    to={`/country/${country.ccn3}`}
                >
                    <div className='w-full h-48 flex justify-center items-center'>
                        <img
                            src={country.flags.png}
                            className='w-[70%] h-[70%] object-contain'
                            alt={country.translations.por.common}
                        />
                    </div>
                    <div className='card-body text-center w-full flex-grow flex flex-col justify-between'>
                        <h2 className='card-title text-lg font-semibold line-clamp-2'>
                            {country.translations.por.common}
                        </h2>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default CountryList;
