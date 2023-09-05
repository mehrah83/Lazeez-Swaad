import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({element}) => {
    const cartItems = useSelector((state) => state.cart.cart);
  return cartItems.length > 0 ? element : <Navigate to="/"/>
}

export default ProtectedRoute
