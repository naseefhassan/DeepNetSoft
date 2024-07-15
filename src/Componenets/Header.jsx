import Logo from '../assets/Images/Logo.png'

function Header() {
  return (
    <> 
      <div className="bg-black h-12 flex justify-around">
        <div className='my-[18px] z-10 flex'>
        <img className='h-14 ' src={Logo} alt="LOGO IMAGE" />
        <h1 className='text-white font-semibold leading-7 text-2xl'><span className='text-[#0796EF]'>DEEP</span> NET <br/><span  className='text-[#857878] '>SOFT</span> </h1>
        <h1></h1>
        </div>
      
            <ul className='text-[#F5F5F5] flex gap-3 text-[14px]  h-full items-end  '>
                <li className='hover:underline cursor-pointer hover:decoration-blue-500'>HOME</li>
                <li className='text-[#0796EF] font-mono font-semibold hover:underline hover:underline-offset-2 cursor-pointer'>MENU</li>
                <li className='hover:underline cursor-pointer hover:decoration-blue-500'>MAKE A RESERVATION</li>
                <li className='hover:underline cursor-pointer hover:decoration-blue-500'>CONTACT US</li>
            </ul>
      
      </div>
    </>
  );
}

export default Header;
