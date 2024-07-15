import Brounch from "../Componenets/Brounch";
import Footer from "../Componenets/Footer";
import Header from "../Componenets/Header";
import Hookah from "../Componenets/Hookah";
import MenuList from "../Componenets/MenuList";
import MenuPart from "../Componenets/MenuPart";
import Order from "../Componenets/Order";


function LandingPage() {
 
  return (
    <>
      <div className="no-scrollbar">
        <Header />
        <MenuPart />
        <div className="bg-black p-5 py-10 pt-16  ">
          <MenuList />
          <Brounch/>
          <Hookah/>
          <Order/>
          <Footer/>
        </div>

      </div>
    </>
  );
}

export default LandingPage;
