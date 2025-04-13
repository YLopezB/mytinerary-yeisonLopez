import { useSelector } from "react-redux"
import CardItinerary from "./CardItinerary";
import NoItinerary from "./NoItinerary"


export default function Itineraries() {
  const {itineraries} = useSelector((state) => state.itinerariesStore)
  return (
        <div className="flex flex-col items-center text-center p-5"> 
          <h2 className="text-white text-3xl">Itineraries</h2>
          {itineraries.length !== 0 ? itineraries.map((itinerary) => <CardItinerary key={itinerary._id} itinerary={itinerary}/>) : <NoItinerary/>}
        </div>
  )
}
