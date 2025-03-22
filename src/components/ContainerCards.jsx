import { useFetch } from "../../data/useFetch";
import CardCity from "./CardCity";
import NoCity from "./NoCity";

export default function ContainerCards({ searchTerm }) {
  const { data, loading, error } = useFetch("/cities/allCities");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  const filteredData = data.filter(city =>
    city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-wrap gap-8 justify-center m-3 mb-8">
      {filteredData.length !== 0 ? filteredData.map((city) => 
        <CardCity key={city._id} city={city} /> 
      ) : <NoCity />}
    </div>
  );
}