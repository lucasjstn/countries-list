import React from 'react';
import { useAppContext } from '../../screens/Home/Home';

const CountryList = () => {
    const { visibleCountries, page, setPage } = useAppContext();
    return <section className='flex flex-col items-center'>
      {visibleCountries?.map((country, index) => (
        <div key={index} className='pt-16 card w-[80%] bg-base-100  my-2 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>{country.translations.por.common}</h2>
            <p>Populacão: {country.population}</p>
         </div> 
         </div>
      ))}
    </section>;
};

export default CountryList;
