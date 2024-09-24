import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import Filters from '../Filters';

const Navbar = () => {
    const [showElement, setShowElement] = useState(false);

    const toggleShowElement = () => {
        setShowElement(!showElement);
        console.log(showElement);
    };
    return (
        <nav className='flex w-full flex-col justify-center items-center gap-8 border rounded shadow-lg py-3  h-46 '>
            <div className=' md:items-center flex flex-row items-center justify-center h-full'>
                <h1 className='uppercase '>Países</h1>
            </div>
            <div className='gap-4 flex flex-col md:flex-row'>
                <SearchInput />
                <Button handle={toggleShowElement} showElement={showElement} />
            </div>
            {showElement && <Filters />}
        </nav>
    );
};

export default Navbar;
