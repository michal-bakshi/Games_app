import { useLocation, useParams } from "react-router-dom"

export const CompPersonal=()=>{
    const dateBuy=useParams().date
      const location = useLocation(); 
      const currentGame = location.state?.name || null;
    return <>
    <p>{dateBuy}----תאריך קניה</p>
    {currentGame.map((x)=><div>
        <p>{x.name}</p>
        <p>{x.sum}</p>
    </div>)}

    </>
}