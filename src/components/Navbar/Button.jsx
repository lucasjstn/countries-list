import { CiFilter } from 'react-icons/ci';
import { IoChevronDown } from 'react-icons/io5';
const Button = ({handle, showElement}) => {
    return (
        <button onClick={handle} className='btn'>
            <CiFilter className='text-2xl sm:text-3xl' />
            {!showElement ?<IoChevronDown /> : <IoChevronDown className='rotate-180' />}
            
        </button>
    );
};

export default Button;
