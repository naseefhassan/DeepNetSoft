import { useEffect, useState } from "react";
import DarkDrink from "../assets/Images/Cocktail.png";
import Cocktail from "../assets/Images/Cocktail2.png";
import axiosInstance from "../api/axios";

function MenuList() {
  const [drinks, setdrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/drink");
        setdrinks(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" relative border-[1px] border-white text-white flex flex-col items-center justify-center mx-4 sm:mx-14">
        <img className="w-44 absolute -top-44 -left-16" src={DarkDrink} alt="" />
        <img className="w-44 absolute -top-28 -right-10" src={Cocktail} alt="" />
    
      <div className="flex gap-5 items-center mt-10">
        <div className="h-[2px] w-14 bg-[#857878]"></div>
        <h1 className="font-bold text-2xl">DRINKS</h1>
        <div className="h-[2px] w-14 bg-[#857878]"></div>
      </div>
        <div  className=" inline-flex flex-col md:grid sm:grid-cols-2 gap-10 w-full m-4">
    {drinks.map((item)=>(
        <div key={item._id} className="flex flex-col items-start ml-10 ">
          <h1 className="font-semibold">{item.name}.............................${item.price}</h1>
          <h1 className="text-[10px] text-gray-400 ">{item.description}</h1>
        </div>
    ))}
      </div>
    </div>
  );
}

export default MenuList;
