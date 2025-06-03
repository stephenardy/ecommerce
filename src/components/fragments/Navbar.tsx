import { FaShoppingCart } from "react-icons/fa";

import Logo from "../elements/Logo";
import ButtonLogin from "../elements/ButtonLogin";
import ButtonRegister from "../elements/ButtonRegister";

type TNavbar = {
  onClickCart: () => void;
};

const Navbar = ({ onClickCart }: TNavbar) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white py-4 px-16">
      <Logo />
      <div className="flex flex-row gap-4">
        <ButtonRegister />
        <ButtonLogin />
        <div onClick={() => onClickCart()}>
          <FaShoppingCart className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
