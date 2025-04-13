import WelcomeCity from "../components/WelcomeCity";
import Itineraries from "../components/ContainerItineraries";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCityById } from "../redux/actions/cityActions";
import { getItineraryById } from "../redux/actions/itineraryActions";
import { useEffect } from "react";

export default function City() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCityById(id));
    dispatch(getItineraryById(id))
  }, [dispatch])

  return (
    <>
    <WelcomeCity/>
    <Itineraries/>
    </>
  )
}
