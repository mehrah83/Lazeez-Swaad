import FoodCard from "./FoodCard";
import toast, { Toaster } from 'react-hot-toast';
const FoodItems = () => {
  const handleToast = (name) => toast.success(`${name} added to cart`);
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
            <FoodCard handleToast={handleToast}/>
    </>
  );
};

export default FoodItems;
