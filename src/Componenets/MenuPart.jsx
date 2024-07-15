import Menu from "../assets/Images/Menu.jpeg";
import MenuDesign from "../assets/Images/MenuDesign.png";

function MenuPart() {
  return (
    <>
      {/* <div className='h-[331px] w-full  bg-cover flex justify-center items-center ' style={{backgroundImage:`url(${Menu})`,}}>
      <div className=''>
        <h1 className='text-white text-center text-[75px] font-semibold [text-shadow:_0_1px_0_var(--tw-shadow-#800020)] '>MENU</h1>
        <h1 className='text-[#BBBBBB] text-center kelly-slab-regular'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br/> place an order, use the "Order Online" button located below the menu.</h1>
      </div>
    </div>
    <div className='h-[79px] text-white font-bold flex justify-center items-center gap-5 font-serif ' style={{backgroundImage:`url(${MenuDesign})`}}>
     <div className="p-1 px-4 border-2 border-[#0796EF] bg-black">FOOD</div>
     <div className="p-1 px-4 border-2  border-[#0796EF] bg-[#0796EF] ">DRINK</div>
     <div className="p-1 px-2 border-2  border-[#0796EF] bg-black ">BRUNCH</div>
    </div> */}

      <div
        className="h-[331px] w-full bg-cover flex justify-center items-center relative p-2"
        style={{ backgroundImage: `url(${Menu})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative">
          <div className="">
            <h1 className="text-white text-center text-[75px] font-semibold [text-shadow:_0_1px_0_var(--tw-shadow-#800020)] ">
              MENU
            </h1>
            <h1 className="text-[#BBBBBB] text-center kelly-slab-regular">
              Please take a look at our menu featuring food, drinks, and brunch.
              If you'd like to <br /> place an order, use the "Order Online"
              button located below the menu.
            </h1>
          </div>{" "}
        </div>
      </div>
      <div
        className="h-[79px] text-white font-bold flex justify-center items-center gap-5 font-serif relative "
        style={{ backgroundImage: `url(${MenuDesign})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex justify-center items-center gap-5 ">
          <div className="p-1 px-2 sm:px-4 border-2 border-[#0796EF] bg-black">
            FOOD
          </div>
          <div className="p-1 px-2 sm:px-4 border-2 border-[#0796EF] bg-[#0796EF]">
            DRINK
          </div>
          <div className="p-1 px-2 sm:px-4 border-2 border-[#0796EF] bg-black">
            BRUNCH
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPart;
