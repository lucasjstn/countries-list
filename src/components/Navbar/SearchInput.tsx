import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { useAppContext } from '../../screens/Home/Home';
const SearchInput = () => {
    const { searchTerm, setSearchTerm, setPage } = useAppContext();
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setPage(1); // Reseta para página 1 quando busca
    };
    return (
        <div className='w-[50vw] md:w-[35vw] max-w-[70vw]  '>
            <label className='input input-bordered flex items-center gap-2 '>
                <input
                    type='text'
                    className='min-w-6'
                    placeholder='Buscar país'
                    onChange={handleSearch}
                    value={searchTerm}
                />
                <CiSearch className='ml-auto min-w-6' />
            </label>
        </div>
    );
};

export default SearchInput;
