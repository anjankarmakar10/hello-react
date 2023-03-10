import ResturantCard from "./ResturantCard";

const ResturantList = ({ restaurantList }) => {
  return (
    <section className="card-container">
      {restaurantList.map((resturant) => (
        <ResturantCard key={resturant.data.uuid} {...resturant.data} />
      ))}
    </section>
  );
};

export default ResturantList;
