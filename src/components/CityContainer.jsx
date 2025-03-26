import React, { useState } from 'react';
import Search from "./SearchComponent";
import ContainerCards from "./ContainerCards";
import Loading from "./Loading";
import { useFetch } from "../../data/useFetch";

export default function CityContainer() {
  const { data, loading } = useFetch("/cities/allCities");
  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    <>
    {loading ? <Loading/> : <div className='flex flex-col items-center'>
        <Search setSearchTerm={setSearchTerm} />
        <ContainerCards searchTerm={searchTerm} data={data}/>
      </div> }
    </>
  );
}
