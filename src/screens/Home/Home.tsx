import { createContext, useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useFetch } from '../../hooks/useFetch';
import CountryList from '../../components/CountryList';
import { FilterCountries } from '../../../helpers/FilterCountries.tsx';

export const AppContext = createContext('');
export const useAppContext = () => useContext(AppContext);
const URL = 'https://restcountries.com/v3.1/all';

const Home = () => {
    const [page, setPage] = useState(1);
    const { loading, data: countries } = useFetch(URL);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedSubRegion, setSelectedSubRegion] = useState('');
    const [selectedPopulationRange, setSelectedPopulationRange] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('name'); // Novo estado para controlar o critério de ordenação

    const itemsPerPage = 16;
    const offset = (page - 1) * itemsPerPage;

    let filteredCountries = FilterCountries(
        countries,
        searchTerm,
        selectedRegion,
        selectedSubRegion,
        selectedPopulationRange
    );

    filteredCountries = filteredCountries?.sort((a: any, b: any) => {
        if (sortBy === 'name') {
            return sortOrder === 'asc'
                ? a.translations.por.common.localeCompare(
                      b.translations.por.common
                  )
                : b.translations.por.common.localeCompare(
                      a.translations.por.common
                  );
        } else if (sortBy === 'population') {
            return sortOrder === 'asc'
                ? a.population - b.population
                : b.population - a.population;
        }

        if (sortBy === 'area') {
            return sortOrder === 'asc' ? a.area - b.area : b.area - a.area;
        }
    });

    const visibleCountries = filteredCountries?.slice(
        offset,
        offset + itemsPerPage
    );
    const maxPage = Math.ceil(filteredCountries?.length / itemsPerPage);

    

    return (
        <>
            <AppContext.Provider
                value={{
                    countries,
                    page,
                    setPage,
                    visibleCountries,
                    searchTerm,
                    setSearchTerm,
                    selectedRegion,
                    setSelectedRegion,
                    setSelectedSubRegion,
                    selectedSubRegion,
                    selectedPopulationRange,
                    setSelectedPopulationRange,
                    setSortBy,
                    sortBy,
                    setSortOrder,
                    sortOrder,
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
                                    onClick={() => setPage(page - 1)}
                                    className='join-item btn'
                                    disabled={page === 1}
                                >
                                    «
                                </button>
                                <button className='join-item btn'>
                                    Página {page}
                                </button>
                                <button
                                    onClick={() => setPage(page + 1)}
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
