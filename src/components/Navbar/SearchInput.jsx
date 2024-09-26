import React, { useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useAppContext } from '../../screens/Home/Home';
import { useSelector, useDispatch } from 'react-redux';
import { handleSearch } from '../../features/filter/filterSlice';

const SearchInput = () => {
    // const { setSearchTerm, setPage } = useAppContext();
    const { searchTerm } = useSelector((state) => state.filter.searchTerm);
    const dispatch = useDispatch();

    // const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    //     setPage(1); // Reseta para página 1 quando busca
    // };
    const handleInputChange = (event) => {
        dispatch(handleSearch(event.target.value));
    };

    useEffect(() => {
        handleInputChange;
    }, [searchTerm]);
    return (
        <div className='w-[50vw] md:w-[35vw] max-w-[70vw]  '>
            <label className='input input-bordered flex items-center gap-2 '>
                <input
                    type='text'
                    className='min-w-6'
                    placeholder='Buscar país'
                    onChange={handleInputChange}
                    value={searchTerm}
                />
                <CiSearch className='ml-auto min-w-6' />
            </label>
        </div>
    );
};

export default SearchInput;
