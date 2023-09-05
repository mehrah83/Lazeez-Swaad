import { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const uniqueListCategories = () => {
    let uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
    //  console.log(uniqueCategories);
  };

  useEffect(() => {
    uniqueListCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <>
      <div className="category">
        <h2>Find the best food</h2>
        <div>
          <button onClick={() => dispatch(setCategory("All"))} className={`btn ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
            All
          </button>
          {categories.map((currELem, index) => {
            return (
              <>
                <button
                  onClick={() => dispatch(setCategory(currELem))}
                  key={index}
                  className={`btn ${selectedCategory === currELem && "bg-green-500 text-white"}`}>
                  {currELem}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
