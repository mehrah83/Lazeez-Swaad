import { useDispatch } from "react-redux";
import { removeFromCart, incementQty, decrementQty } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";
// eslint-disable-next-line react/prop-types
const ItemCard = ({id,name,qty,price,img}) => {
  const dispatch = useDispatch();
  return (
    <>
     <div className="itemCard">
     <i onClick={() => {
       dispatch(removeFromCart({
        id: id,
        name: name,
        price:price,
        img:img,
        qty: qty
       }))
       toast(`${name} Removed!`, {
        icon: '👋',
      });
     }} className="deleteIcon fa-solid fa-trash"></i>
        <img  src={img} alt="" />
        <div>
            <h4>{name}</h4>
            <p className="price">₹ {price}</p>
        </div>
        <div className="itemQuantity">
        <i onClick={() => (qty > 1) ? dispatch(decrementQty({id: id})) : (qty=0)} className="minusIcon fa-solid fa-minus"></i>
        <span className="quantity">{qty}</span>
        <i onClick={() => (qty >= 1) ? dispatch(incementQty({id: id})) : (qty=0)} className="plusIcon fa-solid fa-plus"></i>
        </div>
        </div> 
    </>
  )
}

export default ItemCard
