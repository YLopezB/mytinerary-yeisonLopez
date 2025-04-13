import Search from "./SearchComponent";
import ContainerCards from "./ContainerCards";
import Loading from "./Loading";
import { useSelector } from "react-redux";

export default function CityContainer() {
  const {loading} = useSelector((state) => state.citiesStore)

  return (
    <>
    {loading ? <Loading/> : 
        <div className='flex flex-col items-center'>
          <Search/>
          <ContainerCards/>
        </div> 
      }
    </>
  );
}
