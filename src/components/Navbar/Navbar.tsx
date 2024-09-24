import React, { useState } from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import Filters from '../Filters';

const Navbar = () => {
    const [showElement, setShowElement] = useState(false);

    const toggleShowElement = () => {
        setShowElement(!showElement);
        console.log(showElement);
        
    }
    return (
        // <div className='flex w-full h-[24vh] justify-center items-center md:grid md:grid-cols-3 gap-14 my-6 border-b-2 border-gray-300 shadow-lg shadow-gray-500/50'>
        //     <div className=' md:items-center flex items-center justify-center h-full'>
        //         <h1 className='uppercase hidden md:block'>Países</h1>
        //         <h1 className='md:hidden'>P</h1>
        //     </div>
        //     <div className='gap-4 flex'>
        //         <SearchInput />
        //         <Button />
        //     </div>
        // </div>
        <nav className='flex w-full flex-col justify-center items-center gap-8 border rounded shadow-lg py-3'>
            <div className=' md:items-center flex flex-row items-center justify-center h-full'>
                <h1 className='uppercase hidden md:block'>Países</h1>
                <h1 className='md:hidden'>P</h1>
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
