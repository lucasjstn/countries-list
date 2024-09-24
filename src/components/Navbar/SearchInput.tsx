import React from 'react';
import { CiSearch } from 'react-icons/ci';
const SearchInput = () => {
    return (
        <div className='w-[50vw] md:w-[35vw] max-w-[70vw]  '>
            <label className='input input-bordered flex items-center gap-2 '>
                <input type='text' className='min-w-6' placeholder='Pesquisar' />
                <CiSearch className='ml-auto min-w-6'/>
            </label>
        </div>
    );
};

export default SearchInput;
