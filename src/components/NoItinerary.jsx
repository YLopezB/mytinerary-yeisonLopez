export default function NoItinerary() {
  return (
    <div className="h-full w-110 object-cover flex flex-col bg-gray-800 rounded-lg 2xl:w-140 items-center p-5 m-5">
      <h2 className="text-white sm:text-3xl">No itineraries yet for this city</h2>
      <img className="h-50 sm:h-65" src="https://static.vecteezy.com/system/resources/previews/022/278/183/original/location-not-found-3d-render-icon-illustration-with-transparent-background-empty-state-png.png" alt="Not found" />
      <p className="text-white sm:text-2xl">Currently, there are no itineraries available for this city. Check back later for updates!</p>
    </div>
  )
}
