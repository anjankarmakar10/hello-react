import { useState } from "react";
import ResturantList from "./ResturantList";
import { restaurantList } from "../contants";

const filterData = (resturant, query) => {
  return resturant.filter((item) =>
    item.data.name.toLowerCase().includes(query.toLowerCase())
  );
};

const Body = () => {
  const [resturants, setResturants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  const onInputChange = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setResturants(filterData(resturants, searchText));
  };

  return (
    <div>
      <section className="search-section">
        <div className="container">
          <h1 className="search-section-title">
            Great restaurants in Bangalore, delivering to you
          </h1>
          <p className="search-section-subtitle">
            Set exact location to find the right restaurants near you.
          </p>
          <form onSubmit={(e) => onFormSubmit(e)} className="search-wrapper">
            <input
              className="input-search"
              placeholder="Enter street name, area etc..."
              type="text"
              value={searchText}
              onChange={(e) => onInputChange(e)}
            />
            <button className="btn-search">Find Food</button>
          </form>
        </div>
      </section>

      <div className="container">
        <ResturantList restaurantList={resturants} />
      </div>
    </div>
  );
};

export default Body;
