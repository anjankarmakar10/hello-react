import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { ShimmerUICards } from "./ShimmerUI";

// this function filter restaurant
const filterData = (restaurant, query) => {
  return restaurant.filter((item) =>
    item?.data?.name?.toLowerCase()?.includes(query.toLowerCase())
  );
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onInputChange = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    // filtered restaurants from all restaurants
    setFilteredRestaurants(filterData(allRestaurants, searchText));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const results = await response.json();

      const restaurants = results?.data?.cards[2]?.data?.data?.cards;

      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error(error);
    }
  };

  // early return if data was not there
  if (!allRestaurants) return <h1>Somthing wrong!</h1>;

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

      <div style={{ paddingBlock: "2rem" }} className="container">
        {/* render all data condition */}

        {allRestaurants?.length === 0 ? (
          <ShimmerUICards />
        ) : (
          <>
            {/* render filter data condition */}
            {filteredRestaurants.length === 0 ? (
              <h1>No Restaurant match your filter!!</h1>
            ) : (
              <RestaurantList restaurantList={filteredRestaurants} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
