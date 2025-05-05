import WelcomeCity from "../components/WelcomeCity";
import Itineraries from "../components/ContainerItineraries";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCityById } from "../redux/actions/cityActions";
import { getItineraryById } from "../redux/actions/itineraryActions";

export default function City() {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getCityById(id));
  dispatch(getItineraryById(id))

  return (
    <>
    <WelcomeCity/>
    <Itineraries/>
    </>
  )
}
