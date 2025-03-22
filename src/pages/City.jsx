import Construction from "../components/Construction";
import { useFetch } from "../../data/useFetch";
import { useParams } from "react-router-dom";

export default function City() {
  const { id } = useParams();
  const { data } = useFetch(`/cities/id/${id}`)
  console.log(data)

  return (
    <Construction/>
  )
}
