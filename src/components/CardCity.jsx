import { NavLink } from "react-router-dom";

export default function CardCity({ city }) {
  return (
    <NavLink to={`/city/${city._id}`}>
      <div className="relative w-100 h-60 sm:w-110 sm:h-70 hover:scale-108 hover:transition-transform">
        <img src={city.image} alt={city.name} className="rounded-lg object-cover h-full w-full" />
        <div className="absolute top-3 left-3 text-white drop-shadow-[3px_3px_1px_rgba(0,0,0,0.9)] text-2xl">
          <h2 className="font-bold">📍{city.name}</h2>
          <p className=" ">🗺️{city.country}</p>
        </div>
        <div className="absolute bottom-3 right-3 h-10 w-30 bg-black/75 rounded-lg text-white font-bold hover:scale-110 text-center p-2">✈️ Details</div>
      </div>
    </NavLink>
  );
}
