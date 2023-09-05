import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header  className="header">
        <nav className="navbar">
          <div className="logo">
            <a href=""><img src="/src/assets/logo.png" alt="logo" /></a>
            <h4>Lazeez-$waad</h4>
          </div>
          {/* <div className="date">
            <h3>{new Date().toUTCString().slice(0, 16)}</h3>
          </div> */}
          <div className="searchBar">
            <input
              type="search"
              name="search"
              id=""
              placeholder="search here"
              autoComplete="off"
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
