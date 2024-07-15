import Brounch from "../Componenets/Brounch";
import Header from "../Componenets/Header";
import MenuList from "../Componenets/MenuList";
import MenuPart from "../Componenets/MenuPart";


function LandingPage() {
 
  return (
    <>
      <div className="">
        <Header />
        <MenuPart />
        <div className="bg-black p-5 py-10 pt-16  ">
          <MenuList />
          <Brounch/>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
