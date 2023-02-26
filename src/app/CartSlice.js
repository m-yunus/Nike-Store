import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import Items from "../components/utils/Items";

const initialState = {
  CartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], //suppose databae
    cartTotalamount:0,
    cartTotalQntity:0,

};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    //action
    setOpenCart: (state, action) => {
      state.CartState = action.payload.CartState;
    },
    setCloseCart: (state, action) => {
      state.CartState = action.payload.CartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (items) => items.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY increases`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart:(state,action)=>{
      const removeItem=state.cartItems.filter((Items)=>Items.id !==action.payload.id)
      state.cartItems=removeItem
      localStorage.setItem("cart",JSON.stringify(state.cartItems))
      toast.success(`${action.payload.title} Removed From Cart`)
    },
    setIncreaseQty:(state,action)=>{
      const itemIndex = state.cartItems.findIndex(
        (items) => items.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY increased`);
      }
      localStorage.setItem("cart",JSON.stringify(state.cartItems))
        
    },
    setDecreaseQty:(state,action)=>{
      const itemIndex = state.cartItems.findIndex(
        (items) => items.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item QTY decreased`);
      }
      localStorage.setItem("cart",JSON.stringify(state.cartItems))

    },
    setClearcartitems:(state,action)=>{
      state.cartItems=[]
      toast.success('Cart Cleared')
      localStorage.setItem("cart",JSON.stringify(state.cartItems))
    },
    setGetTotals:(state,action)=>{
      let {totalAmount,totalQty}=  state.cartItems.reduce((cartTotal,CartItems)=>{
          const {price,cartQuantity}=CartItems;
          const totalPrice=price * cartQuantity;
          cartTotal.totalAmount +=totalPrice
          cartTotal.totalQty +=cartQuantity
          return cartTotal
        },{
          totalAmount:0,
          totalQty:0,
        })
        state.cartTotalamount=totalAmount
        state.cartTotalQntity=totalQty
    }
  },

});
export const selectCartstate = (state) => state.cart.CartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalamount;
export const selectTotalQty = (state) => state.cart.cartTotalQntity;
export const { setOpenCart, setCloseCart, setAddItemToCart,setRemoveItemFromCart,setClearcartitems,setDecreaseQty,setIncreaseQty,setGetTotals } =
  CartSlice.actions;
export default CartSlice.reducer;
