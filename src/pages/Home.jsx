import React from "react";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
import { useFetch } from "../../data/useFetch";

export default function Home() {
  const { data, loading } = useFetch("/cities/allCities");

  return (
    <div>
      <Welcome />
      {loading ? <Loading/> : <Carousel data={data}/>}
    </div>
  );
}

