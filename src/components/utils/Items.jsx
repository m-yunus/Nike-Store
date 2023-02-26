import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Items = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  console.log(id);
  const dispatch = useDispatch();
  const AddtoCart = () => {
    const item = { id, title, text, img, color, shadow, rating, price };
    dispatch(setAddItemToCart(item));
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        CartState: true,
      })
    );
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className=" grid items-center justify-items-center">
          <h1
            className="text-slate-200 text-xl lg:text-lg md:text-base
            font-medium filter drop-shadow"
          >
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center justify-between bg-white/80 px-1 rounded">
              <h1 className="">{price}</h1>
            </div>
            <div className="">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => AddtoCart()}
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
              onClick={()=> {AddtoCart(); onCartToggle();}}
            >
              {btn}
            </button>
          </div>
        </div>
        <div>
          <img
            src={img}
            alt="img/item-image"
            className="h-36 w-64 transitions-theme hover:-rotate-12"
          />
        </div>
      </div>
    </>
  );
};

export default Items;
