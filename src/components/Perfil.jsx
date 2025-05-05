import { useSelector } from "react-redux"

export default function Perfil() {
    const {photo, name} = useSelector((state)=> state.auth.user)
    console.log(photo);
    
  return (
      <div className="flex gap-2">
        <img className='object-cover h-7 w-7 rounded-full border-white border-1' src={photo} alt={name}/>
    </div>
  )
}
