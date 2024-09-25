import React from 'react';
import { useAppContext } from '../../screens/Home/Home';

const CountryList = () => {
    const { visibleCountries, page, setPage } = useAppContext();
    return <section className='flex flex-col items-center md:grid md:grid-cols-4 gap-4'>
      {visibleCountries?.map((country, index) => (
        <div key={index} className='card w-48 max-h-86 bg-base-100 overflow-hidden  my-2 shadow-xl '>
          <img src={country.flags.png} className='w-full object-cover' alt={country.translations.por.common} />
          
          <div className='card-body'>
            <h2 className='card-title'>{country.translations.por.common}</h2>
            <p>Populacão: {country.population}</p>
         </div> 
         </div>
      ))}
    </section>;
};

export default CountryList;
