import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import Filters from '../Filters';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showElement, setShowElement] = useState(sessionStorage.getItem('showElement') === 'true');

    const toggleShowElement = () => {
        setShowElement(!showElement);
        sessionStorage.setItem('showElement', !showElement);
    };


    return (
        <nav className='flex w-full flex-col justify-center items-center gap-8 border rounded shadow-lg py-3  h-46 '>
            <div className=' md:items-center flex flex-row items-center justify-center h-full'>
                <Link to={'/'}>
                    <h1 className='uppercase text-4xl'>Países</h1>
                </Link>
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
