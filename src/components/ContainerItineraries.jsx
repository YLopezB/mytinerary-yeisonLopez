import { useSelector } from 'react-redux'
import Loading from './Loading';
import Itineraries from './Itineraries'


export default function ContainerItineraries() {
  const {loading} = useSelector((state) => state.itinerariesStore)
  
  return (
    <>
    {loading ? <Loading/> : <Itineraries/>}
    </>
  )
}
