import { createContext, useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/index.jsx';
import { useFetch } from '../../hooks/useFetch.js';
import CountryList from '../../components/CountryList/index.jsx';
import { FilterCountries } from '../../../helpers/FilterCountries.jsx';
import { useParams } from 'react-router-dom';

export const AppContext = createContext('');
export const useAppContext = () => useContext(AppContext);
const URL = 'https://restcountries.com/v3.1/all';

const Home = () => {
    const [page, setPage] = useState(1);
    const { loading, data: countries } = useFetch(URL);

    const [filter, setFilter] = useState({
        searchTerm: sessionStorage.getItem('searchTerm') || '',
        selectedRegion: sessionStorage.getItem('region') || '',
        selectedSubRegion: sessionStorage.getItem('subregion') || '',
        selectedPopulationRange: sessionStorage.getItem('population') || '',
        sortBy: sessionStorage.getItem('sortBy') || 'name',
        sortOrder: sessionStorage.getItem('sortOrder') || 'asc',
    });

    const itemsPerPage = 9;
    const offset = (page - 1) * itemsPerPage;

    let filteredCountries = FilterCountries(
        countries,
        filter.searchTerm,
        filter.selectedRegion,
        filter.selectedSubRegion,
        filter.selectedPopulationRange
    );

    filteredCountries = filteredCountries?.sort((a, b) => {
        if (filter.sortBy === 'name') {
            return filter.sortOrder === 'asc'
                ? a.translations.por.common.localeCompare(
                      b.translations.por.common
                  )
                : b.translations.por.common.localeCompare(
                      a.translations.por.common
                  );
        } else if (filter.sortBy === 'population') {
            return filter.sortOrder === 'asc'
                ? a.population - b.population
                : b.population - a.population;
        }

        if (filter.sortBy === 'area') {
            return filter.sortOrder === 'asc'
                ? a.area - b.area
                : b.area - a.area;
        }
    });

    const visibleCountries = filteredCountries?.slice(
        offset,
        offset + itemsPerPage
    );
    const maxPage = Math.ceil(filteredCountries?.length / itemsPerPage);

    const handlePageUp = () => {
        setPage(page + 1);
        sessionStorage.setItem('page', page);
    };

    const handlePageDown = () => {
        setPage(page - 1);
        sessionStorage.setItem('page', page);
    };

    useEffect(() => {
        console.log(sessionStorage.length);
    }, []);
    return (
        <>
            <AppContext.Provider
                value={{
                    countries,
                    page,
                    setPage,
                    visibleCountries,
                    filter,
                    setFilter,
                }}
            >
                <main className='flex flex-col'>
                    <Navbar />
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className='flex flex-col items-center'>
                            <CountryList />
                            <div className='join'>
                                <button
                                    onClick={handlePageDown}
                                    className='join-item btn'
                                    disabled={page === 1}
                                >
                                    «
                                </button>
                                <button className='join-item btn'>
                                    Página {page}
                                </button>
                                <button
                                    onClick={handlePageUp}
                                    className='join-item btn'
                                    disabled={page === maxPage}
                                >
                                    »
                                </button>
                            </div>
                        </div>
                    )}
                </main>
            </AppContext.Provider>
        </>
    );
};

export default Home;
