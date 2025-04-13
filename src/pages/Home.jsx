import React from "react";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading"
import { useSelector } from "react-redux";


export default function Home() {
  const { loading } = useSelector((state) => state.citiesStore)

    return (
    <div>
      <Welcome />
      {loading ? <Loading/> : <Carousel/>}
    </div>
  );
}

