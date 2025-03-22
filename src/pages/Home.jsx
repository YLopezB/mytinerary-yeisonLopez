import React from "react";
import Welcome from "../components/Welcome";
import Carousel from "../components/Carousel";
import { useFetch } from "../../data/useFetch";

export default function Home() {
  const { data, loading, error } = useFetch("/cities/allCities");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div>
      <Welcome />
      <Carousel data={data} />
    </div>
  );
}

