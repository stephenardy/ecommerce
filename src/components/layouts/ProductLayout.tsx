import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { Props } from "./AuthLayout";

type ProductProps = Props & {
  handleCartVisibility: () => void;
};

const ProductLayout = ({ children, handleCartVisibility }: ProductProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Navbar onClickCart={handleCartVisibility} />
      {children}
      <Footer />
    </div>
  );
};

export default ProductLayout;
