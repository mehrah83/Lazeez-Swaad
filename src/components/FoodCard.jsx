import FoodData from "../data/FoodData";
import { useDispatch,useSelector } from "react-redux";
import {addToCart} from "../redux/slices/CartSlice";
// eslint-disable-next-line react/prop-types
const FoodCard = ({handleToast}) => {
  const dispatch = useDispatch();
  const categoryElem = useSelector((state) => state.category.category);
  const searchElem = useSelector((state) => state.search.search);
  return (
    <>
    <div className="foodCard">
      <div className="container grid grid-three-column">
        {
          FoodData.filter((food) => {
            if(categoryElem === "All"){
              return food.name.toLowerCase().includes(searchElem.toLowerCase());
            }else{
              return categoryElem === food.category && food.name.toLowerCase().includes(searchElem.toLowerCase());
            }
          }).map((food) => {
            const { id, img, name, price, desc, rating } = food;
            return (
              <>
              <div className="card" key={id}>
                <img src={img} alt="card images" />
                <div className="info">
                  <h3 className="card-name">{name}</h3>
                  <p className="card-price">₹ {price}</p>
                </div>
                <p className="card-desc">{desc.slice(0, 80)}...</p>
                <div className="another-info">
                  <h3 className="card-rating">
                    <i className="fa-solid fa-star"></i>
                    {rating}
                  </h3>
                  <button onClick={() => {
                    dispatch(addToCart({
                      id: id,
                      name: name,
                      price:price,
                      img:img,
                      rating:rating,
                      qty: 1
                    }));
                    handleToast(name);
                  }} className="btn">Add to cart</button>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
      </div>
    </>
  );
};

export default FoodCard;
