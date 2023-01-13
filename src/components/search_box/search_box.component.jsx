
import "./search_box.style.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <div>
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
