import { useEffect } from "react";
import { useState } from "react";
import Botol2 from "../Botol2/Botol2";
import './Bottoles.css'


const Bottoles = () => {

    const [bottoles,setBottoles]=useState([]);
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('Bottoles.json')
        .then(res=>res.json())
        .then(data=>setBottoles(data))
    },[])

    const handleBottolePrice=bottole=>{
        const newCart=[...cart,bottole]
        setCart(newCart)

    }
    return (
        <div>
            <h3>Bootles Avilabe:{bottoles.length}</h3>
            <h5>Cart:{cart.length}</h5>
            <div  className="bottole-container">
            {
                bottoles.map(bottole=><Botol2 
                    key={bottole.id} 
                    handleBottolePrice={handleBottolePrice}
                    bottole={bottole}></Botol2>)
            }
            </div>
        </div>
    );
};

export default Bottoles;