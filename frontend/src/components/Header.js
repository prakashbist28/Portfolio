import React from 'react';
import Logo from '../assets/portlogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCreativePage = location.pathname === '/creative';

  const handleClick = () => {
    if (isCreativePage) {
      navigate('/');
    } else {
      navigate('/creative');
    }
  };

  return (
    <header className='py-4 '>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <a href='/'>
            <img className='h-[60px] md:h-[80px] hover:scale-125 transition duration-500' src={Logo} alt='logo' />
          </a>

          <button
            className='bg-gradient-to-tr rounded-3xl [text-shadow:1px_2px_3px_#000000] from-teal-500 via-teal-800 to-teal-950 px-4 py-2 hover:px-6 transition-all duration-300 text-[14px] md:text-[18px] font-bold font-primary'
            onClick={handleClick}
          >
            {isCreativePage ? 'Back to Work' : 'Beyond Code'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

