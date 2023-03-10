import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurantList }) => {
  return (
    <section className="card-container">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.data.uuid} {...restaurant.data} />
      ))}
    </section>
  );
};

export default RestaurantList;
