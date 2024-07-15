import HookahImg from '../assets/Images/Hookah.png'

function Hookah() {
  return (
    <div className='border-[1px] border-white text-white mt-10 flex flex-col justify-center items-center mx-4 sm:mx-14'>
        <img className='w-24' src={HookahImg} alt="" />
        <div className="flex sm:gap-5 items-center mt-10">
        <div className="h-[2px] w-14 bg-[#857878]"></div>
        <h1 className="font-bold text-2xl uppercase ml-10 sm:ml-0">hookah flavors</h1>
        <div className="h-[2px] w-14 bg-[#857878]"></div>
      </div>
      <div className='flex justify-center items-center w-full'>
  <ul className='sm:flex sm:justify-evenly sm:w-full sm:my-5 sm:items-center font-semibold cursor-pointer my-5 text-center'>
    <li className='hover:underline hover:decoration-blue-500 underline-offset-1 mb-2 sm:mb-0'>ORANGE MINT</li>
    <li className='hover:underline hover:decoration-blue-500 underline-offset-1 mb-2 sm:mb-0'>BLUE MIST</li>
    <li className='hover:underline hover:decoration-blue-500 underline-offset-1 mb-2 sm:mb-0'>MIGHTY FREEZE</li>
    <li className='hover:underline hover:decoration-blue-500 underline-offset-1 mb-2 sm:mb-0'>LUV 66</li>
    <li className='hover:underline hover:decoration-blue-500 underline-offset-1 mb-2 sm:mb-0'>PEACH</li>
    <li className='hover:underline hover:decoration-blue-500 underline-offset-1 mb-2 sm:mb-0'>WATERMELON</li>
  </ul>
</div>

    </div>
  )
}

export default Hookah