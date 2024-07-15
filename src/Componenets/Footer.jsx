import Foot from "../assets/Images/foot.png";
import Logo from "../assets/Images/Logo.png";

function Footer() {
  return (
    <>
    <div className="sm:flex  text-white justify-evenly mx-4 sm:mx-14">
      <div className="border-2 sm:w-1/3  rounded-lg m-5 px-16 flex flex-col justify-center items-center text-[#857878] ">
        <h1 className="text-[#0796EF] font-semibold">Connect with Us</h1>
        <h1 className="text-sm">+1 470-788-8255</h1>
        <h1 className="text-sm">email@42barandgrill.com</h1>
      </div>

      <div className=" relative border-2 sm:w-1/3 rounded-lg  p-8 flex flex-col items-center justify-center m-5 px-16">
        <img className="w-16 absolute -top-8" src={Logo} alt="" />
        <h1 className="font-semibold">
          <span className="text-[#0796EF]">DEEP</span> NET{" "}
          <span className="text-[#857878] ">SOFT</span>
        </h1>
        <img className="w-32 mt-3" src={Foot} alt="" />
      </div>

      <div className="border-2 sm:w-1/3 rounded-lg flex flex-col justify-center items-center m-5 px-16">
        <h1 className="text-[#0796EF] font-semibold uppercase">Find us</h1>
        <h1 className="text-sm text-[#857878]">
          327 Memorial Dr SE, Atlanta, <br />
          GA 30312, USA
        </h1>
      </div>
    </div>
    <div className="text-[#857878] text-[10px] text-center sm:flex justify-evenly">
        <h1>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</h1>
        <h1>Terms & Conditions  Privacy Policy</h1>
      </div>
    </>
  );
}

export default Footer;
