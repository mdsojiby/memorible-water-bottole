
import './Botol2.css'
const Botol2 = ({bottole,handleBottolePrice}) => {
    const{name,img,price}=bottole
    // console.log(bottole)
    return (
        <div className="bottole">
            <h2>Bottole :{name}</h2>
            <img src={img} alt="" />
            <p>Price:${price}</p>
            <button onClick={ () => handleBottolePrice(bottole)}>Purches</button>
        </div>
    );
};

export default Botol2;