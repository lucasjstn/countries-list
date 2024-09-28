import React, { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

import SearchInput from './SearchInput';
import Button from './Button';
import Filters from '../Filters';
import { Link } from 'react-router-dom';

const themes = {
    coffee: 'coffee',
    retro: 'retro',
};

const Navbar = ({ setPage }) => {
    const [theme, setTheme] = useState(
        sessionStorage.getItem('theme') || themes.retro
    );

    const [showElement, setShowElement] = useState(
        sessionStorage.getItem('showElement') === 'true'
    );

    const handleTheme = () => {
        const newTheme = theme === themes.retro ? themes.coffee : themes.retro;
        sessionStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    const toggleShowElement = () => {
        setShowElement(!showElement);
        sessionStorage.setItem('showElement', !showElement);
    };

    const handleTitleClick = () => {
        setPage(1);
        sessionStorage.setItem('page', 1);
    };
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <nav className='flex w-full flex-col justify-center items-center gap-8 border rounded shadow-lg py-3  h-46 '>
            <div className=' md:items-center flex flex-row items-center justify-center h-full'>
                <Link to={'/'} onClick={handleTitleClick}>
                    <h1 className='uppercase text-4xl'>Lista de Países</h1>
                </Link>
            </div>
            <label className='swap swap-rotate'>
                <input
                    type='checkbox'
                    onChange={handleTheme}
                    checked={theme === themes.coffee}
                />

                <BsSunFill className='swap-on h-4 w-4' />
                <BsMoonFill className='swap-off h-4 w-4' />
            </label>
            <div className='gap-4 flex flex-col md:flex-row'>
                <SearchInput />
                <Button handle={toggleShowElement} showElement={showElement} />
            </div>
            {showElement && <Filters />}
        </nav>
    );
};

export default Navbar;
