import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import logo from "../components/Nike Store Commerce Web App/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectTotalAmount, selectTotalQty, setOpenCart } from "../app/CartSlice";
const Navbar = () => {
  const cartitems=useSelector(selectCartItems)
  const dispatch = useDispatch();
  const totalAmount=useSelector(selectTotalAmount)
  const totalQty=useSelector(selectTotalQty)
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        CartState: true,
      })
    );
  };

  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto filter brightness-0`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style  text-slate-900 transition-all duration-300`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style text-slate-900 transition-all duration-300"}`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style text-slate-900 transition-all duration-300`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 
                        bg-slate-900  shadow-slate-900 text-slate-100 `}
                >
                  {totalQty}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
