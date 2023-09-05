import { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
  const totalQty = cartItems.reduce((totalItems, item) => totalItems + item.qty,0); // TotalItems initial value is:0
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`cart fixed top-0 right-0 w-full lg:w-[20vw] h-full ${
          activeCart ? "translate-x-full" : "translate-x-0"
        } transition-all duration-500 z-50`}
      >
        <div>
          <span className="myOrder">My Order</span>
          <i
            onClick={() => setActiveCart(!activeCart)}
            className="closeIcon fa-solid fa-rectangle-xmark"
          ></i>
        </div>
        { cartItems.length > 0 ?
          cartItems.map((food) => {
            return (
              <>
              <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} rating={food.rating}/>
              </>
            )
          }): <h2 className="emptyCard">Cart Is Empty</h2>
        }
        <div className="sum absolute bottom-0">
          <h4 className="font-semibold">Items: {totalQty}</h4>
          <h4 className="font-semibold">Total Amount: <span className="totalPrice">₹{totalPrice}</span></h4>
          <hr className="my-2" />
          <button onClick={() => navigate("/success")} className="btn font-bold px-3 text-white py-2 lg:w-[17vw] w-[90vw] mb-2">
            Checkout
          </button>
        </div>
      </div>
      <i
        onClick={() => setActiveCart(!activeCart)}
        className={`shoppingCartIcon fa-solid fa-cart-shopping ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}></i>
    </>
  );
};

export default Cart;
