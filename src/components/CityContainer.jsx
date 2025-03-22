import React, { useState } from 'react';
import Search from "./SearchComponent";
import ContainerCards from "./ContainerCards";

export default function CityContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='flex flex-col items-center'>
      <Search setSearchTerm={setSearchTerm} />
      <ContainerCards searchTerm={searchTerm} />
    </div>
  );
}
