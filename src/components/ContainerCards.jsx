import CardCity from "./CardCity";
import NoCity from "./NoCity";

export default function ContainerCards({ data, searchTerm }) {

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