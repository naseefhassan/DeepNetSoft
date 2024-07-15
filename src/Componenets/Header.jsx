import { useState } from 'react';
import Logo from '../assets/Images/Logo.png'
import { FaBars } from 'react-icons/fa';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <> 
      <div className="bg-black h-12 flex justify-around">
        <div className='my-[18px] z-10 flex'>
        <img className='h-14 ' src={Logo} alt="LOGO IMAGE" />
        <h1 className='text-white font-semibold leading-7 text-2xl hidden sm:block'><span className='text-[#0796EF]'>DEEP</span> NET <br/><span  className='text-[#857878] '>SOFT</span> </h1>
        <h1></h1>
        </div>
      
            <ul className={`sm:flex gap-3 text-white text-[14px] h-full items-end ${showMenu ? '  z-10 ' : ' hidden text-end'}`}>
                <li className='hover:underline cursor-pointer hover:decoration-blue-500'>HOME</li>
                <li className='text-[#0796EF] font-mono font-semibold hover:underline hover:underline-offset-2 cursor-pointer'>MENU</li>
                <li className='hover:underline cursor-pointer hover:decoration-blue-500'>MAKE A RESERVATION</li>
                <li className='hover:underline cursor-pointer hover:decoration-blue-500'>CONTACT US</li>
            </ul>
      
      <div className="sm:hidden absolute right-2 top-4">
          <FaBars className="text-white cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>  
    </>
  );
}

export default Header;