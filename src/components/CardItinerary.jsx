import { useState } from "react"
import Activities from "./Activities";

export default function CardItinerary({itinerary}) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(itinerary.likes);
  const [showActivities, setShowActivities] = useState(false)
  const toggleActivities = () => setShowActivities(!showActivities)

  const handleLikeClick = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setLiked(!liked);
  }

  return (
    <div className="bg-black text-white rounded-2xl overflow-hidden shadow-lg border border-white/10 m-5">
      <div className="relative">
        <img
          src={itinerary.photo}
          alt={itinerary.name}
          className="w-120 2xl:w-140 2xl:h-100 object-cover"
        />
        <button onClick={handleLikeClick} className="absolute top-2 left-2 bg-black/60 rounded-full px-2 py-1 text-1xl flex items-center gap-1 cursor-pointer">
          <p>{liked ? "💙" : "🤍"}</p>
          <p>{likesCount}</p>
        </button>
      </div>
      <div className="p-4">
        <div className="flex mb-3 gap-2 ">
          <div className="flex flex-col items-center gap-2 w-1/3">
            <img
              src={itinerary.userPhoto}
              alt={itinerary.userName}
              className="w-10 h-10 sm:w-20 sm:h-20 rounded-full"
            />
            <div className="text-sm sm:text-lg">
              <p className="font-bold">{itinerary.userName}</p>
            </div>
          </div>
          <div className="text-left w-2/3">
            <p className="text-white font-bold sm:text-3xl">{itinerary.name}</p>
            <div className="flex items-center justify-between gap-2 text-gray-300">
              <p className="font-bold mt-5 sm:text-lg">🪙 ${itinerary.price}</p>
              <p className="font-bold mt-5 sm:text-lg">⌚ {itinerary.duration} h</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3">
          {itinerary.hashtags.map((tag, index) => (
            <p
              key={index}
              className="bg-black text-white font-bold px-3 py-1 rounded-full border-blue-500 border-1 text-xs shadow-md shadow-blue-500 sm:text-sm"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={toggleActivities}
            className="text-white text-xl cursor-pointer hover:scale-110 transition-transform animate-bounce"
          >
            {showActivities ? "⌃" : "⌄"}
          </button>
        </div>
        {showActivities && (
          <div className="mt-4">
            <Activities/>
          </div>
        )}
      </div>
    </div>
  );
}
